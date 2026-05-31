import mongoose from 'mongoose';
import { Plan } from './src/models/Plan.js';
import dotenv from 'dotenv';

dotenv.config();

async function addPlans() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing plans
    await Plan.deleteMany({});
    console.log('🗑️ Cleared existing plans');

    // Create plans
    const plans = [
      {
        name: 'Basic Membership',
        duration: 30,
        price: 19.99,
        description: 'Perfect for beginners starting their fitness journey',
        features: [
          'Gym access 5 days/week',
          'Basic equipment access',
          'Locker room & facilities',
          'Mobile app access',
          'Community forum'
        ],
        trialDays: 7,
        discount: 0,
        priority: 1,
        isActive: true
      },
      {
        name: 'Premium Membership',
        duration: 30,
        price: 39.99,
        description: 'Our most popular plan with unlimited gym access',
        features: [
          'Unlimited gym access 24/7',
          'All equipment & facilities',
          'Group fitness classes',
          '2 personal training sessions/month',
          'Nutrition guidance',
          'Priority booking',
          'Mobile app + wearable sync',
          'Member exclusive events'
        ],
        trialDays: 14,
        discount: 10,
        priority: 2,
        isActive: true
      },
      {
        name: 'Elite Membership',
        duration: 30,
        price: 59.99,
        description: 'Ultimate fitness experience with premium services',
        features: [
          'Unlimited 24/7 gym access',
          'Unlimited group classes & workshops',
          'Unlimited personal training sessions',
          'Sport-specific training programs',
          'Nutritionist consultation (monthly)',
          'Recovery & massage therapy (2x/month)',
          'Guest privileges (2 guests/month)',
          'Premium locker access',
          'VIP priority support',
          'Exclusive member events & retreat',
          'Advanced fitness analytics'
        ],
        trialDays: 14,
        discount: 20,
        priority: 3,
        isActive: true
      },
      {
        name: 'Annual Gold Plan',
        duration: 365,
        price: 399.99,
        description: 'Best value - save 2 months with annual commitment',
        features: [
          'Unlimited 24/7 gym access',
          'All Premium features included',
          'Free guest passes (12x/year)',
          'Quarterly fitness assessments',
          'Custom annual training plan',
          'Priority equipment reservation',
          'Exclusive member merchandise',
          'Free smoothies (1x/week)',
          'Birthday month 50% off services',
          '24/7 member support'
        ],
        trialDays: 14,
        discount: 33,
        priority: 4,
        isActive: true
      }
    ];

    const createdPlans = await Plan.insertMany(plans);
    console.log('✅ Successfully added membership plans:');
    createdPlans.forEach((plan, idx) => {
      console.log(`  ${idx + 1}. ${plan.name} - $${plan.price}/${plan.duration}d - ${plan.features.length} features`);
    });

    await mongoose.connection.close();
    console.log('\n✅ Database connection closed');
  } catch (error) {
    console.error('❌ Error adding plans:', error.message);
    process.exit(1);
  }
}

addPlans();
