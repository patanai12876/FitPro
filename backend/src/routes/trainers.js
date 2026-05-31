import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { Trainer } from '../models/Trainer.js';

const router = express.Router();

// GET all trainers
router.get('/', asyncHandler(async (req, res) => {
  const { specialization } = req.query;
  const filter = specialization ? { specialization } : {};
  
  const trainers = await Trainer.find(filter).sort({ rating: -1 });
  res.json({
    success: true,
    data: trainers,
  });
}));

// GET trainer by ID
router.get('/:id', asyncHandler(async (req, res) => {
  const trainer = await Trainer.findById(req.params.id);
  if (!trainer) {
    return res.status(404).json({
      success: false,
      message: 'Trainer not found',
    });
  }
  res.json({
    success: true,
    data: trainer,
  });
}));

// CREATE trainer (Admin only)
router.post('/', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  const trainer = new Trainer(req.body);
  await trainer.save();
  
  res.status(201).json({
    success: true,
    data: trainer,
  });
}));

// UPDATE trainer (Admin only)
router.put('/:id', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  const trainer = await Trainer.findByIdAndUpdate(
    req.params.id,
    { ...req.body, updatedAt: new Date() },
    { new: true, runValidators: true }
  );
  
  if (!trainer) {
    return res.status(404).json({
      success: false,
      message: 'Trainer not found',
    });
  }

  res.json({
    success: true,
    data: trainer,
  });
}));

// DELETE trainer (Admin only)
router.delete('/:id', authMiddleware, asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required',
    });
  }

  await Trainer.findByIdAndDelete(req.params.id);
  
  res.json({
    success: true,
    message: 'Trainer deleted',
  });
}));

export default router;
