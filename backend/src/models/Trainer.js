import mongoose from 'mongoose';

const trainerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  specialization: { 
    type: String, 
    enum: ['bodybuilding', 'cardio', 'yoga', 'weight loss', 'strength training', 'functional fitness'],
    required: true
  },
  certifications: { type: [String], required: true },
  experience: { type: Number, required: true }, // in years
  urlphoto: { type: String },
  bio: { type: String },
  phone: { type: String },
  email: { type: String },
  hourlyRate: { type: Number },
  availability: {
    monday: { start: String, end: String },
    tuesday: { start: String, end: String },
    wednesday: { start: String, end: String },
    thursday: { start: String, end: String },
    friday: { start: String, end: String },
    saturday: { start: String, end: String },
    sunday: { start: String, end: String },
  },
  rating: { type: Number, default: 5 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Trainer = mongoose.model('Trainer', trainerSchema);
