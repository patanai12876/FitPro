import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { Plan } from '../models/Plan.js';

const router = express.Router();

// GET all plans
router.get('/', asyncHandler(async (req, res) => {
  const plans = await Plan.find({ isActive: true }).sort({ priority: 1, price: 1 });
  res.json({
    success: true,
    data: plans,
  });
}));

// GET plan by ID
router.get('/:id', asyncHandler(async (req, res) => {
  const plan = await Plan.findById(req.params.id);
  if (!plan) {
    return res.status(404).json({
      success: false,
      message: 'Plan not found',
    });
  }
  res.json({
    success: true,
    data: plan,
  });
}));

// CREATE plan (Admin only)
router.post('/', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  const plan = new Plan(req.body);
  await plan.save();
  
  res.status(201).json({
    success: true,
    data: plan,
  });
}));

// UPDATE plan (Admin only)
router.put('/:id', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  const plan = await Plan.findByIdAndUpdate(
    req.params.id,
    { ...req.body, updatedAt: new Date() },
    { new: true, runValidators: true }
  );
  
  if (!plan) {
    return res.status(404).json({
      success: false,
      message: 'Plan not found',
    });
  }

  res.json({
    success: true,
    data: plan,
  });
}));

// DELETE plan (Admin only)
router.delete('/:id', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  await Plan.findByIdAndDelete(req.params.id);
  
  res.json({
    success: true,
    message: 'Plan deleted',
  });
}));

export default router;
