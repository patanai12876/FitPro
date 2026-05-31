# Project Structure & Component Guide

## Frontend Architecture

### Pages (Next.js App Router)

#### Home Page (`/`)
Main landing page featuring:
- Hero section with CTA buttons
- Gym statistics
- Featured services
- Trainer carousel
- Membership plans preview
- Testimonials
- Latest blog posts
- Call-to-action section

**Components Used:**
- Hero, GymStats, FeaturedServices, TrainerCarousel, MembershipPlans, Testimonials, LatestBlog, CTA

#### Services Page (`/services`)
Browse and filter gym services and facilities.

**Features:**
- Category filtering (cardio, strength, flexibility, etc.)
- Service cards with details and ratings
- Loading states
- Responsive grid layout

**Components Used:**
- ServiceCard, PageHeader

#### Trainers Page (`/trainers`)
View and filter certified trainers.

**Features:**
- Specialization filtering
- Trainer profiles with ratings
- Certification display
- Availability calendar
- Book session buttons

**Components Used:**
- TrainerCard, PageHeader

#### Membership Page (`/membership`)
View and compare membership plans.

**Features:**
- Plan cards with pricing
- Feature comparison
- Popular plan highlighting
- FAQ section
- Discount information

**Components Used:**
- PlanCard, PageHeader

#### Contact Page (`/contact`)
Submit inquiries and view contact information.

**Features:**
- Contact form with validation
- Inquiry type selection
- Contact information display
- Google Maps integration
- Office hours

**Components Used:**
- PageHeader

#### Gallery Page (`/gallery`)
Browse gym photo gallery.

**Features:**
- Category filtering
- Image hover effects
- Responsive grid
- Image details display

**Components Used:**
- PageHeader

#### Blog Page (`/blog`)
Read fitness articles and gym updates.

**Features:**
- Category filtering
- Article preview cards
- View counter
- Publish date display
- Link to full article

**Components Used:**
- PageHeader

#### About Page (`/about`)
Learn about FitPro Gym.

**Features:**
- Mission, vision, values
- Company story
- Leadership team
- Why choose us section

#### Privacy Page (`/privacy`)
Privacy policy information.

#### Terms Page (`/terms`)
Terms and conditions.

### Components

#### Layout Components
- **Navbar** - Navigation bar with mobile menu
- **Footer** - Footer with links and contact info
- **PageHeader** - Page title header section

#### Home Page Components
- **Hero** - Hero section with background image
- **GymStats** - Statistics display (members, equipment, etc.)
- **FeaturedServices** - Featured services carousel
- **TrainerCarousel** - Featured trainers display
- **MembershipPlans** - Membership plans preview
- **Testimonials** - Member testimonials carousel
- **LatestBlog** - Latest blog posts preview
- **CTA** - Call-to-action section

#### Card Components
- **ServiceCard** - Service/facility card with rating
- **TrainerCard** - Trainer profile card
- **PlanCard** - Membership plan card with features

### Utilities
- **api.js** - Axios API client with token handling

### Styles
- **globals.css** - Global styles, animations, utilities
- **tailwind.config.js** - Tailwind CSS configuration

## Backend Architecture

### Server Setup
- **server.js** - Express application setup
- **config/database.js** - MongoDB connection

### Models
- **User.js** - User schema (auth, profile)
- **Trainer.js** - Trainer schema
- **Service.js** - Service/facility schema
- **Plan.js** - Membership plan schema
- **Inquiry.js** - Contact inquiry schema
- **Gallery.js** - Gallery image schema
- **Blog.js** - Blog post schema

### Middleware
- **auth.js** - JWT authentication, admin check
- **errorHandler.js** - Global error handler

### Routes
- **auth.js** - Authentication (register, login)
- **services.js** - Service CRUD operations
- **trainers.js** - Trainer CRUD operations
- **plans.js** - Plan CRUD operations
- **inquiries.js** - Inquiry submission and management
- **gallery.js** - Gallery CRUD operations
- **blog.js** - Blog CRUD operations
- **admin.js** - Admin dashboard and management

## State Management

Currently using:
- React hooks (useState, useEffect) for component state
- localStorage for token management
- API client for server state

Future: Consider adding Zustand or Redux for complex state.

## Styling Approach

- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Global animations and utilities
- **Color Scheme**:
  - Primary: #1F4E78
  - Secondary: #2E5C8A
  - Accent: #E84C3D
  - Light: #F5F5F5
  - Dark: #333333

## Responsive Breakpoints

- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px+

## Performance Optimizations

1. Image optimization via Next.js Image component
2. Code splitting with dynamic imports
3. CSS minification with Tailwind
4. API response caching (implement later)
5. Lazy loading of components (implement later)

## Security Measures

1. JWT token-based authentication
2. CORS configuration
3. Rate limiting on API
4. Helmet for security headers
5. Input validation on both client and server
6. Password hashing with bcrypt
7. HTTPS/SSL enforcement

## Testing (To be implemented)

- Unit tests with Jest
- Integration tests with Supertest
- E2E tests with Cypress
- API testing with Postman

---

**Last Updated:** May 13, 2026
