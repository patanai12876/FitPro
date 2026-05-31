import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Service } from './src/models/Service.js';

dotenv.config();

const services = [
  {
    name: 'Personal Training Sessions',
    description: 'One-on-one training with certified professionals tailored to your fitness goals and experience level.',
    category: 'strength',
    price: 50,
    duration: '60 min',
    features: ['Custom workout plans', 'Form correction', 'Progress tracking', 'Nutrition guidance'],
    rating: 5,
    capacity: 1,
    isActive: true
  },
  {
    name: 'Cardio & HIIT Classes',
    description: 'High-intensity interval training and cardio workouts designed to maximize calorie burn and endurance.',
    category: 'cardio',
    price: 20,
    duration: '45 min',
    features: ['Group motivation', 'Various intensity levels', 'Music-driven', 'All fitness levels'],
    rating: 4.8,
    capacity: 20,
    isActive: true
  },
  {
    name: 'Yoga & Flexibility Training',
    description: 'Improve flexibility, balance, and mindfulness through guided yoga sessions and stretching routines.',
    category: 'flexibility',
    price: 25,
    duration: '60 min',
    features: ['Beginner to advanced', 'Stress relief', 'Injury prevention', 'Mind-body connection'],
    rating: 4.9,
    capacity: 25,
    isActive: true
  },
  {
    name: 'Group Fitness Classes',
    description: 'Dynamic group classes including spinning, CrossFit, and functional training with expert instructors.',
    category: 'group classes',
    price: 30,
    duration: '60 min',
    features: ['Community atmosphere', 'Expert instructors', 'Mixed intensity options', 'Equipment provided'],
    rating: 4.7,
    capacity: 30,
    isActive: true
  },
  {
    name: 'Recovery & Massage Therapy',
    description: 'Professional massage and recovery services to aid muscle recovery and improve overall wellness.',
    category: 'recovery',
    price: 60,
    duration: '60 min',
    features: ['Swedish massage', 'Sports massage', 'Myofascial release', 'Sauna access'],
    rating: 5,
    capacity: 1,
    isActive: true
  }
];

async function addServices() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gym-website', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');

    // Clear existing services
    await Service.deleteMany({});
    console.log('Cleared existing services');

    // Insert new services
    const result = await Service.insertMany(services);
    console.log(`Successfully added ${result.length} services:`);
    
    result.forEach((service, index) => {
      console.log(`${index + 1}. ${service.name} (${service.category})`);
    });

    await mongoose.connection.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error adding services:', error);
    process.exit(1);
  }
}

addServices();
