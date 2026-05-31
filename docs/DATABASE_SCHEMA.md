# Database Schema Documentation

## Users Collection

```javascript
{
  _id: ObjectId,
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  phone: String,
  role: String (enum: ['user', 'admin'], default: 'user'),
  profileImage: String,
  registeredDate: Date (default: now),
  isActive: Boolean (default: true),
  lastLogin: Date
}
```

## Trainers Collection

```javascript
{
  _id: ObjectId,
  firstName: String (required),
  lastName: String (required),
  specialization: String (enum: ['bodybuilding', 'cardio', 'yoga', 'weight loss', 'strength training', 'functional fitness']),
  certifications: [String] (required),
  experience: Number (required, years),
  photo: String,
  bio: String,
  phone: String,
  email: String,
  hourlyRate: Number,
  availability: {
    monday: { start: String, end: String },
    tuesday: { start: String, end: String },
    wednesday: { start: String, end: String },
    thursday: { start: String, end: String },
    friday: { start: String, end: String },
    saturday: { start: String, end: String },
    sunday: { start: String, end: String }
  },
  rating: Number (default: 5),
  reviews: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

## Services Collection

```javascript
{
  _id: ObjectId,
  name: String (required),
  description: String (required),
  category: String (enum: ['cardio', 'strength', 'flexibility', 'group classes', 'recovery', 'nutrition']),
  image: String,
  features: [String],
  rating: Number (default: 5),
  reviews: [ObjectId],
  isActive: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

## Membership Plans Collection

```javascript
{
  _id: ObjectId,
  name: String (required),
  duration: Number (required, days),
  price: Number (required),
  features: [String],
  description: String,
  trialDays: Number (default: 7),
  isActive: Boolean (default: true),
  discount: Number (default: 0, percentage),
  priority: Number (default: 0, for ordering),
  createdAt: Date,
  updatedAt: Date
}
```

## Inquiries Collection

```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  phone: String,
  subject: String (required),
  message: String (required),
  inquiryType: String (enum: ['general', 'trial-booking', 'trainer-request', 'membership', 'other'], default: 'general'),
  status: String (enum: ['new', 'pending', 'resolved', 'closed'], default: 'new'),
  submissionDate: Date (default: now),
  response: String,
  respondedBy: ObjectId (ref: User),
  respondedAt: Date,
  attachments: [String]
}
```

## Gallery Collection

```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String,
  image: String (required),
  category: String (enum: ['facilities', 'equipment', 'events', 'members', 'before-after']),
  uploadedAt: Date (default: now),
  featured: Boolean (default: false)
}
```

## Blog Collection

```javascript
{
  _id: ObjectId,
  title: String (required),
  slug: String (required, unique),
  content: String (required),
  excerpt: String,
  author: ObjectId (ref: User, required),
  category: String (enum: ['fitness-tips', 'nutrition', 'gym-updates', 'success-stories', 'promotions']),
  image: String,
  views: Number (default: 0),
  status: String (enum: ['draft', 'published'], default: 'draft'),
  publishedAt: Date,
  createdAt: Date,
  updatedAt: Date,
  comments: [ObjectId]
}
```

## Indexes

### Users
- `email` (unique)
- `registeredDate`

### Trainers
- `specialization`
- `rating`

### Services
- `category`
- `isActive`

### Plans
- `isActive`
- `priority`

### Inquiries
- `submissionDate`
- `status`
- `email`

### Gallery
- `category`
- `featured`

### Blog
- `slug` (unique)
- `status`
- `publishedAt`
- `author`

## Sample Data

### Sample Trainer
```json
{
  "firstName": "Alex",
  "lastName": "Johnson",
  "specialization": "strength training",
  "certifications": ["NASM-CPT", "ACE-CPT", "ISSN-SNS"],
  "experience": 8,
  "photo": "https://example.com/trainer1.jpg",
  "bio": "Expert in strength and conditioning with 8 years of experience",
  "phone": "+1-555-123-4567",
  "email": "alex@fitprogym.com",
  "hourlyRate": 75,
  "rating": 4.8
}
```

### Sample Service
```json
{
  "name": "Strength Training Equipment",
  "description": "State-of-the-art free weights and machines",
  "category": "strength",
  "image": "https://example.com/strength.jpg",
  "features": [
    "Olympic weights",
    "Dumbbells from 5-100 lbs",
    "Powerlifting rack",
    "Smith machines"
  ],
  "rating": 4.9,
  "isActive": true
}
```

### Sample Plan
```json
{
  "name": "Premium",
  "duration": 365,
  "price": 99.99,
  "features": [
    "Unlimited access to all facilities",
    "Personal training sessions (2/month)",
    "Group classes",
    "Nutrition consultation"
  ],
  "description": "Best value annual plan",
  "trialDays": 7,
  "isActive": true,
  "discount": 15,
  "priority": 1
}
```

---

**Last Updated:** May 13, 2026
