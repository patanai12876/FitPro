import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Service name is required'],
    trim: true,
    minlength: [3, 'Service name must be at least 3 characters'],
    maxlength: [100, 'Service name cannot exceed 100 characters']
  },
  description: { 
    type: String, 
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters']
  },
  category: {
    type: String,
    enum: {
      values: ['cardio', 'strength', 'flexibility', 'group classes', 'recovery', 'nutrition'],
      message: 'Invalid category'
    },
    required: [true, 'Category is required']
  },
  price: {
    type: Number,
    min: [0, 'Price cannot be negative'],
    default: 0
  },
  duration: {
    type: String,
    enum: ['30 min', '45 min', '60 min', '90 min'],
    default: '60 min'
  },
  image: { 
    type: String,
    default: null
  },
  features: {
    type: [String],
    default: []
  },
  rating: { 
    type: Number, 
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot be more than 5'],
    default: 5 
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  capacity: {
    type: Number,
    min: [1, 'Capacity must be at least 1'],
    default: 1
  },
  isActive: { 
    type: Boolean, 
    default: true,
    index: true
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    index: true
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  },
}, { timestamps: true });

// Index for search
serviceSchema.index({ name: 'text', description: 'text' });
serviceSchema.index({ category: 1, isActive: 1 });

export const Service = mongoose.model('Service', serviceSchema);
