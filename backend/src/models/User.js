import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  profileImage: { type: String },
  registeredDate: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  lastLogin: Date,
});

export const User = mongoose.model('User', userSchema);
