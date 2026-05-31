import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      trim: true,
      default: null,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 200,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 5000,
    },
    inquiryType: {
      type: String,
      enum: ['general', 'trial-booking', 'trainer-request', 'membership', 'other'],
      default: 'general',
    },
    status: {
      type: String,
      enum: ['new', 'pending', 'resolved', 'closed'],
      default: 'new',
      index: true,
    },
    response: {
      type: String,
      default: null,
      maxlength: 5000,
    },
    respondedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    respondedAt: {
      type: Date,
      default: null,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Indexes for performance
inquirySchema.index({ email: 1 });
inquirySchema.index({ status: 1, createdAt: -1 });
inquirySchema.index({ inquiryType: 1, status: 1 });
inquirySchema.index({ name: 'text', subject: 'text', message: 'text' });

export const Inquiry = mongoose.model('Inquiry', inquirySchema);
