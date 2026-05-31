import express from 'express';
import { body, validationResult, param, query } from 'express-validator';
import { authMiddleware } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { Service } from '../models/Service.js';

const router = express.Router();

// Validation middleware
const validateService = [
  body('name').trim().notEmpty().withMessage('Service name is required')
    .isLength({ min: 3, max: 100 }).withMessage('Name must be 3-100 characters'),
  body('description').trim().notEmpty().withMessage('Description is required')
    .isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('category').isIn(['cardio', 'strength', 'flexibility', 'group classes', 'recovery', 'nutrition'])
    .withMessage('Invalid category'),
  body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a positive number'),
  body('duration').optional().isIn(['30 min', '45 min', '60 min', '90 min']).withMessage('Invalid duration'),
  body('features').optional().isArray().withMessage('Features must be an array'),
  body('capacity').optional().isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(err => ({ field: err.param, message: err.msg }))
    });
  }
  next();
};

// GET all services with search, filter, and pagination
router.get('/', asyncHandler(async (req, res) => {
  const { category, search, sortBy = 'createdAt', order = 'desc', page = 1, limit = 10, isActive } = req.query;
  
  // Build filter
  const filter = {};
  
  // Only filter by isActive if explicitly provided
  if (isActive !== undefined) {
    filter.isActive = isActive === 'true';
  } else {
    // Default to active services
    filter.isActive = true;
  }
  
  if (category) {
    filter.category = category;
  }
  
  // Search in name and description
  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }
  
  // Pagination
  const pageNum = Math.max(1, parseInt(page));
  const limitNum = Math.min(50, Math.max(1, parseInt(limit)));
  const skip = (pageNum - 1) * limitNum;
  
  // Sort
  const sortObj = {};
  sortObj[sortBy] = order === 'asc' ? 1 : -1;
  
  const [services, total] = await Promise.all([
    Service.find(filter).sort(sortObj).skip(skip).limit(limitNum),
    Service.countDocuments(filter)
  ]);
  
  res.json({
    success: true,
    data: services,
    pagination: {
      total,
      page: pageNum,
      limit: limitNum,
      pages: Math.ceil(total / limitNum)
    }
  });
}));

// GET service by ID
router.get('/:id', param('id').isMongoId().withMessage('Invalid service ID'), handleValidationErrors, asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  
  res.json({
    success: true,
    data: service
  });
}));

// CREATE service (Admin only)
router.post('/', authMiddleware, validateService, handleValidationErrors, asyncHandler(async (req, res) => {
  // Check admin role
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }
  
  // Check if service with same name exists
  const existingService = await Service.findOne({ 
    name: { $regex: `^${req.body.name}$`, $options: 'i' } 
  });
  
  if (existingService) {
    return res.status(409).json({
      success: false,
      message: 'Service with this name already exists'
    });
  }
  
  const service = new Service({
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  
  await service.save();
  
  res.status(201).json({
    success: true,
    message: 'Service created successfully',
    data: service
  });
}));

// UPDATE service (Admin only)
router.put('/:id', authMiddleware, param('id').isMongoId().withMessage('Invalid service ID'), validateService, handleValidationErrors, asyncHandler(async (req, res) => {
  // Check admin role
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }
  
  const service = await Service.findByIdAndUpdate(
    req.params.id,
    { ...req.body, updatedAt: new Date() },
    { new: true, runValidators: true }
  );
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  
  res.json({
    success: true,
    message: 'Service updated successfully',
    data: service
  });
}));

// PATCH service (Partial update)
router.patch('/:id', authMiddleware, param('id').isMongoId().withMessage('Invalid service ID'), asyncHandler(async (req, res) => {
  // Check admin role
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }
  
  const service = await Service.findByIdAndUpdate(
    req.params.id,
    { ...req.body, updatedAt: new Date() },
    { new: true, runValidators: true }
  );
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  
  res.json({
    success: true,
    message: 'Service updated successfully',
    data: service
  });
}));

// DELETE service (Admin only)
router.delete('/:id', authMiddleware, param('id').isMongoId().withMessage('Invalid service ID'), handleValidationErrors, asyncHandler(async (req, res) => {
  // Check admin role
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }
  
  const service = await Service.findByIdAndDelete(req.params.id);
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  
  res.json({
    success: true,
    message: 'Service deleted successfully'
  });
}));

// GET services by category
router.get('/category/:category', asyncHandler(async (req, res) => {
  const validCategories = ['cardio', 'strength', 'flexibility', 'group classes', 'recovery', 'nutrition'];
  
  if (!validCategories.includes(req.params.category)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid category'
    });
  }
  
  const services = await Service.find({ 
    category: req.params.category,
    isActive: true 
  }).sort({ rating: -1 });
  
  res.json({
    success: true,
    count: services.length,
    data: services
  });
}));

// GET featured services (top rated)
router.get('/featured', asyncHandler(async (req, res) => {
  const services = await Service.find({ isActive: true })
    .sort({ rating: -1 })
    .limit(6);
  
  res.json({
    success: true,
    count: services.length,
    data: services
  });
}));

export default router;
