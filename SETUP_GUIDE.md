# Gym Website - Setup & Deployment Guide

## Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Git

### Frontend Setup

1. **Install Dependencies**
```bash
cd frontend
npm install
```

2. **Environment Configuration**
```bash
cp .env.example .env.local
```
Update `.env.local` with your configuration:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_MAPS_API_KEY=your_google_maps_api_key
```

3. **Run Development Server**
```bash
npm run dev
```
Visit `http://localhost:3000`

4. **Build for Production**
```bash
npm run build
npm start
```

### Backend Setup

1. **Install Dependencies**
```bash
cd backend
npm install
```

2. **Environment Configuration**
```bash
cp .env.example .env
```
Update `.env` with your configuration:
```
MONGODB_URI=mongodb://localhost:27017/gym-website
NODE_ENV=development
PORT=5000
JWT_SECRET=your_secret_key_here
ADMIN_EMAIL=admin@gymwebsite.com
ADMIN_PASSWORD=admin123
```

3. **Run Development Server**
```bash
npm run dev
```
Server runs on `http://localhost:5000`

4. **Build for Production**
```bash
npm start
```

## Database Setup

### MongoDB Local Setup
1. Install MongoDB Community Edition
2. Start MongoDB service:
   - Windows: `net start MongoDB`
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo service mongod start`

### MongoDB Atlas (Cloud)
1. Create account at mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update MONGODB_URI in `.env`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service details
- `POST /api/services` - Create service (admin)
- `PUT /api/services/:id` - Update service (admin)
- `DELETE /api/services/:id` - Delete service (admin)

### Trainers
- `GET /api/trainers` - Get all trainers
- `GET /api/trainers/:id` - Get trainer details
- `POST /api/trainers` - Create trainer (admin)
- `PUT /api/trainers/:id` - Update trainer (admin)
- `DELETE /api/trainers/:id` - Delete trainer (admin)

### Membership Plans
- `GET /api/plans` - Get all plans
- `GET /api/plans/:id` - Get plan details
- `POST /api/plans` - Create plan (admin)
- `PUT /api/plans/:id` - Update plan (admin)
- `DELETE /api/plans/:id` - Delete plan (admin)

### Inquiries
- `GET /api/inquiries` - Get all inquiries
- `POST /api/inquiries` - Submit inquiry
- `PUT /api/inquiries/:id` - Update inquiry (admin)
- `DELETE /api/inquiries/:id` - Delete inquiry (admin)

### Gallery
- `GET /api/gallery` - Get gallery images
- `POST /api/gallery` - Upload image (admin)
- `PUT /api/gallery/:id` - Update image (admin)
- `DELETE /api/gallery/:id` - Delete image (admin)

### Blog
- `GET /api/blog` - Get published blogs
- `GET /api/blog/:slug` - Get blog details
- `POST /api/blog` - Create blog (admin)
- `PUT /api/blog/:id` - Update blog (admin)
- `DELETE /api/blog/:id` - Delete blog (admin)

### Admin Dashboard
- `GET /api/admin/dashboard/stats` - Get dashboard statistics
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id/role` - Update user role
- `GET /api/admin/inquiries` - Get inquiries with filters

## Deployment

### Deploy to Vercel (Frontend)
```bash
npm install -g vercel
vercel
```

### Deploy to Heroku (Backend)
```bash
heroku login
heroku create your-gym-api
heroku config:set MONGODB_URI=your_connection_string
heroku config:set JWT_SECRET=your_secret
git push heroku main
```

### Deploy to AWS
1. Use AWS Elastic Beanstalk for backend
2. Use AWS Amplify for frontend
3. Use RDS for database
4. Use S3 for file storage

## Features Implemented

✅ Responsive Design (Mobile, Tablet, Desktop)
✅ Home Page with Hero Section
✅ Services Directory with Filtering
✅ Trainer Profiles with Filtering
✅ Membership Plans Comparison
✅ Contact Form with Email Notifications
✅ Gallery Management
✅ Blog/News Section
✅ Admin Dashboard
✅ User Authentication (JWT)
✅ Database Models for all entities
✅ REST API Endpoints
✅ Error Handling
✅ Security (CORS, Helmet, Rate Limiting)
✅ Mobile Responsive Navigation
✅ Loading States and Error Messages

## File Structure

```
gym-website/
├── frontend/
│   ├── app/
│   │   ├── page.js (Home)
│   │   ├── services/page.js
│   │   ├── trainers/page.js
│   │   ├── membership/page.js
│   │   ├── contact/page.js
│   │   ├── gallery/page.js
│   │   ├── blog/page.js
│   │   ├── about/page.js
│   │   ├── privacy/page.js
│   │   ├── terms/page.js
│   │   └── layout.js
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── ServiceCard.js
│   │   ├── TrainerCard.js
│   │   ├── PlanCard.js
│   │   └── [More components...]
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   └── api.js
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── next.config.js
│
└── backend/
    ├── src/
    │   ├── server.js
    │   ├── config/
    │   │   └── database.js
    │   ├── models/
    │   │   ├── User.js
    │   │   ├── Trainer.js
    │   │   ├── Service.js
    │   │   ├── Plan.js
    │   │   ├── Inquiry.js
    │   │   ├── Gallery.js
    │   │   └── Blog.js
    │   ├── routes/
    │   │   ├── auth.js
    │   │   ├── services.js
    │   │   ├── trainers.js
    │   │   ├── plans.js
    │   │   ├── inquiries.js
    │   │   ├── gallery.js
    │   │   ├── blog.js
    │   │   └── admin.js
    │   └── middleware/
    │       ├── auth.js
    │       └── errorHandler.js
    ├── package.json
    └── .env.example
```

## Troubleshooting

### MongoDB Connection Issues
- Check MongoDB service is running
- Verify connection string in .env
- Check firewall settings (for cloud databases)

### API Not Responding
- Check backend server is running on port 5000
- Verify NEXT_PUBLIC_API_URL in frontend .env
- Check CORS configuration in backend

### Component Not Loading
- Check browser console for errors
- Verify API endpoints are correct
- Clear browser cache and restart dev server

## Next Steps

1. **Add Payment Integration** (Stripe/PayPal)
2. **Implement Email Notifications** (SendGrid/Nodemailer)
3. **Add Search Functionality**
4. **Implement Admin Panel UI**
5. **Add User Profile Management**
6. **Implement Class Scheduling**
7. **Add Progress Tracking**
8. **Implement Social Features**
9. **Setup Analytics** (Google Analytics)
10. **Add Performance Monitoring** (Sentry)

## Support

For issues or questions:
- Email: support@fitprogym.com
- Phone: +1 (555) 123-4567
- GitHub Issues: [Your Repository]

---

**Last Updated:** May 13, 2026
**Version:** 1.0.0
