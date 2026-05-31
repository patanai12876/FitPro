import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Service } from './src/models/Service.js';

dotenv.config();

const seedServices = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gym-website');
    console.log('✅ Connected to MongoDB');

    // Clear existing services
    await Service.deleteMany({});
    console.log('🗑️  Cleared existing services');

    // Sample services data
    const services = [
      {
        name: 'Strength Training Program',
        description: 'Comprehensive strength training programs designed to build muscle and increase power.',
        category: 'strength',
        image: '/images/services/strength1.jpg',
        features: ['Progressive overload', 'Periodized training', 'Technique coaching', 'Performance metrics'],
        rating: 4.9,
      },
      {
        name: 'Boxing Classes',
        description: 'Learn boxing techniques while getting an intense full-body cardio workout.',
        category: 'cardio',
        image: '/images/services/boxing1.png',
        features: ['Technique training', 'Bag work', 'Sparring sessions', 'Cardio conditioning'],
        rating: 4.8,
      },
      {
        name: 'Pilates Sessions',
        description: 'Core-strengthening pilates classes for improved posture, flexibility, and balance.',
        category: 'flexibility',
        image: '/images/services/pilates.jpg',
        features: ['Mat pilates', 'Reformer training', 'Core strengthening', 'Posture improvement'],
        rating: 4.8,
      },
      {
        name: 'Spin Classes',
        description: 'Indoor cycling classes with motivating instructors and energetic music for maximum motivation.',
        category: 'cardio',
        image: '/images/services/spin.webp',
        features: ['RPM tracking', 'Interval training', 'Community rides', 'Music-driven workouts'],
        rating: 4.9,
      },
      {
        name: 'CrossFit Training',
        description: 'Functional fitness training combining weightlifting, gymnastics, and cardio movements.',
        category: 'strength',
        image: '/images/services/crossfit.webp',
        features: ['Functional movements', 'Community support', 'Progressive WODs', 'Competition prep'],
        rating: 4.9,
      },
      {
        name: 'Stretching & Mobility',
        description: 'Dedicated sessions to improve mobility, joint health, and prevent injuries.',
        category: 'flexibility',
        image: '/images/services/stretching.webp',
        features: ['Dynamic stretching', 'Foam rolling', 'Joint mobility', 'Flexibility testing'],
        rating: 4.8,
      },
    ];

    // Insert services
    const createdServices = await Service.insertMany(services);
    console.log(`✅ Seeded ${createdServices.length} services`);

    // List all services
    console.log('\n📋 Services added:');
    createdServices.forEach((service, index) => {
      console.log(`${index + 1}. ${service.name} (${service.category})`);
    });

    console.log('\n✅ Seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  }
};

seedServices();
