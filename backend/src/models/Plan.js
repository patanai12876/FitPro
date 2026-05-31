import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true }, // in days
  price: { type: Number, required: true },
  features: [String],
  description: { type: String },
  trialDays: { type: Number, default: 7 },
  isActive: { type: Boolean, default: true },
  discount: { type: Number, default: 0 }, // percentage
  priority: { type: Number, default: 0 }, // for ordering
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Plan = mongoose.model('Plan', planSchema);
