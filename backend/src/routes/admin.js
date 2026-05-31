import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { User } from '../models/User.js';
import { Inquiry } from '../models/Inquiry.js';
import { Service } from '../models/Service.js';
import { Trainer } from '../models/Trainer.js';
import { Plan } from '../models/Plan.js';

const router = express.Router();

// GET Dashboard Stats (Admin only)
router.get('/dashboard/stats', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  const [totalUsers, totalInquiries, totalServices, totalTrainers, totalPlans] = await Promise.all([
    User.countDocuments(),
    Inquiry.countDocuments(),
    Service.countDocuments(),
    Trainer.countDocuments(),
    Plan.countDocuments(),
  ]);

  const newInquiries = await Inquiry.countDocuments({ status: 'new' });

  res.json({
    success: true,
    data: {
      totalUsers,
      totalInquiries,
      totalServices,
      totalTrainers,
      totalPlans,
      newInquiries,
    },
  });
}));

// GET all users (Admin only)
router.get('/users', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  const users = await User.find().select('-password').sort({ registeredDate: -1 });
  res.json({
    success: true,
    data: users,
  });
}));

// UPDATE user role (Admin only)
router.put('/users/:id/role', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  const { role } = req.body;
  if (!['user', 'admin'].includes(role)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid role',
    });
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role },
    { new: true }
  ).select('-password');

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found',
    });
  }

  res.json({
    success: true,
    data: user,
  });
}));

// GET all inquiries with filtering (Admin only)
router.get('/inquiries', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  const { status } = req.query;
  let filter = {};
  if (status) filter.status = status;

  const inquiries = await Inquiry.find(filter).sort({ submissionDate: -1 });
  res.json({
    success: true,
    data: inquiries,
  });
}));

export default router;
