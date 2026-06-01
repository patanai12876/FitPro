import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import authRoutes from './routes/auth.js';
import servicesRoutes from './routes/services.js';
import trainersRoutes from './routes/trainers.js';
import plansRoutes from './routes/plans.js';
import inquiriesRoutes from './routes/inquiries.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const app = express();

// Trust Railway's proxy so express-rate-limit can read X-Forwarded-For correctly
app.set('trust proxy', 1);

// Connect to Database
connectDB();

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: '*', // Allow all origins for now
  credentials: false
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 900000,
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  message: 'Too many requests from this IP, please try again later.',
  skip: (req) => !req.ip
});
app.use(limiter);

// Body Parser Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/trainers', trainersRoutes);
app.use('/api/plans', plansRoutes);
app.use('/api/inquiries', inquiriesRoutes);
app.use('/api/admin', adminRoutes);

// Serve uploads folder as static
app.use('/uploads', express.static('uploads'));

// 404 Handler
app.use(notFound);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

export default app;
