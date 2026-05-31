import express from 'express';
import { body, validationResult, param } from 'express-validator';
import { authMiddleware } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { Inquiry } from '../models/Inquiry.js';

const router = express.Router();

// Validation middleware
const validateInquiry = [
  body('name').trim().notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters'),
  body('email').trim().notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email'),
  body('subject').trim().notEmpty().withMessage('Subject is required')
    .isLength({ min: 5, max: 200 }).withMessage('Subject must be 5-200 characters'),
  body('message').trim().notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 5000 }).withMessage('Message must be 10-5000 characters'),
  body('phone').optional().trim(),
  body('inquiryType').optional().isIn(['general', 'trial-booking', 'trainer-request', 'membership', 'other'])
    .withMessage('Invalid inquiry type'),
];

const validateStatusUpdate = [
  body('status').notEmpty().withMessage('Status is required')
    .isIn(['new', 'pending', 'resolved', 'closed']).withMessage('Invalid status'),
  body('response').optional().trim().isLength({ max: 5000 }).withMessage('Response must be max 5000 characters'),
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

// POST / - Create inquiry (PUBLIC)
router.post('/', validateInquiry, handleValidationErrors, asyncHandler(async (req, res) => {
  const { name, email, phone, subject, message, inquiryType } = req.body;

  const inquiry = new Inquiry({
    name,
    email,
    phone: phone || null,
    subject,
    message,
    inquiryType: inquiryType || 'general',
    status: 'new',
    isRead: false,
  });

  await inquiry.save();

  res.status(201).json({
    success: true,
    message: 'Inquiry submitted successfully. We will get back to you soon!',
    data: inquiry,
  });
}));

// GET / - Get all inquiries (ADMIN ONLY with pagination & filters)
router.get('/', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  const { status, inquiryType, search, sortBy = 'createdAt', order = 'desc', page = 1, limit = 10, isRead } = req.query;

  const filter = {};

  if (status) {
    filter.status = status;
  }

  if (inquiryType) {
    filter.inquiryType = inquiryType;
  }

  if (isRead !== undefined) {
    filter.isRead = isRead === 'true';
  }

  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } },
      { subject: { $regex: search, $options: 'i' } },
      { message: { $regex: search, $options: 'i' } },
    ];
  }

  const pageNum = Math.max(1, parseInt(page));
  const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
  const skip = (pageNum - 1) * limitNum;

  const sortObj = {};
  sortObj[sortBy] = order === 'asc' ? 1 : -1;

  const [inquiries, total] = await Promise.all([
    Inquiry.find(filter).sort(sortObj).skip(skip).limit(limitNum).populate('respondedBy', 'name email'),
    Inquiry.countDocuments(filter),
  ]);

  res.json({
    success: true,
    data: inquiries,
    pagination: {
      total,
      page: pageNum,
      limit: limitNum,
      pages: Math.ceil(total / limitNum),
    },
  });
}));

// GET /:id - Get single inquiry (ADMIN ONLY)
router.get('/:id', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid inquiry ID',
    });
  }

  const inquiry = await Inquiry.findById(req.params.id).populate('respondedBy', 'name email');

  if (!inquiry) {
    return res.status(404).json({
      success: false,
      message: 'Inquiry not found',
    });
  }

  // Mark as read
  if (!inquiry.isRead) {
    inquiry.isRead = true;
    await inquiry.save();
  }

  res.json({
    success: true,
    data: inquiry,
  });
}));

// PUT /:id - Update inquiry status & response (ADMIN ONLY)
router.put('/:id', authMiddleware, validateStatusUpdate, handleValidationErrors, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid inquiry ID',
    });
  }

  const { status, response } = req.body;

  const inquiry = await Inquiry.findByIdAndUpdate(
    req.params.id,
    {
      status,
      response: response || inquiry?.response,
      respondedBy: req.user.id,
      respondedAt: new Date(),
      updatedAt: new Date(),
    },
    { new: true, runValidators: true }
  ).populate('respondedBy', 'name email');

  if (!inquiry) {
    return res.status(404).json({
      success: false,
      message: 'Inquiry not found',
    });
  }

  res.json({
    success: true,
    message: 'Inquiry updated successfully',
    data: inquiry,
  });
}));

// PATCH /:id - Partial update (ADMIN ONLY)
router.patch('/:id', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid inquiry ID',
    });
  }

  const allowedUpdates = ['status', 'response', 'isRead'];
  const updates = {};

  for (const key in req.body) {
    if (allowedUpdates.includes(key)) {
      updates[key] = req.body[key];
    }
  }

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({
      success: false,
      message: 'No valid updates provided',
    });
  }

  const inquiry = await Inquiry.findByIdAndUpdate(
    req.params.id,
    { ...updates, respondedBy: req.user.id, respondedAt: new Date(), updatedAt: new Date() },
    { new: true, runValidators: true }
  ).populate('respondedBy', 'name email');

  if (!inquiry) {
    return res.status(404).json({
      success: false,
      message: 'Inquiry not found',
    });
  }

  res.json({
    success: true,
    message: 'Inquiry updated successfully',
    data: inquiry,
  });
}));

// DELETE /:id - Delete inquiry (ADMIN ONLY)
router.delete('/:id', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid inquiry ID',
    });
  }

  const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

  if (!inquiry) {
    return res.status(404).json({
      success: false,
      message: 'Inquiry not found',
    });
  }

  res.json({
    success: true,
    message: 'Inquiry deleted successfully',
  });
}));

// GET /stats/dashboard - Get inquiry stats (ADMIN ONLY)
router.get('/stats/dashboard', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  const [total, newCount, unreadCount, resolvedCount] = await Promise.all([
    Inquiry.countDocuments(),
    Inquiry.countDocuments({ status: 'new' }),
    Inquiry.countDocuments({ isRead: false }),
    Inquiry.countDocuments({ status: 'resolved' }),
  ]);

  const typeDistribution = await Inquiry.aggregate([
    { $group: { _id: '$inquiryType', count: { $sum: 1 } } },
  ]);

  res.json({
    success: true,
    data: {
      total,
      new: newCount,
      unread: unreadCount,
      resolved: resolvedCount,
      typeDistribution,
    },
  });
}));

export default router;
