'use client';

import { useState, useEffect } from 'react';
import PlanCard from '@/components/PlanCard';
import PageHeader from '@/components/PageHeader';

const hardcodedPlans = [
  {
    _id: 'plan-1',
    name: 'Starter Plan',
    price: 49,
    duration: 30,
    description: 'Perfect for beginners who want to start their fitness journey with guided support.',
    features: ['Unlimited gym access', '1 personal training session', 'Basic nutrition plan'],
    trialDays: 7,
    discount: 10,
  },
  {
    _id: 'plan-2',
    name: 'Pro Plan',
    price: 79,
    duration: 90,
    description: 'Ideal for regular gym-goers looking to build strength and improve endurance.',
    features: ['Unlimited gym access', 'Weekly coaching', 'Custom workout plan', 'Nutrition tracking'],
    trialDays: 7,
    discount: 15,
  },
  {
    _id: 'plan-3',
    name: 'Elite Plan',
    price: 119,
    duration: 180,
    description: 'For fitness enthusiasts who want premium coaching and advanced progress tracking.',
    features: ['Unlimited gym access', 'Personal trainer', 'Advanced nutrition plan', 'Recovery sessions'],
    trialDays: 7,
    discount: 20,
  },
];

export default function MembershipPage() {
  const [plans, setPlans] = useState(hardcodedPlans);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPlans(hardcodedPlans);
  }, []);

  const handlePlanSelect = (plan) => {
    // Toggle selection - if clicking the same plan, deselect it
    if (selectedPlan?._id === plan._id) {
      setSelectedPlan(null);
    } else {
      setSelectedPlan(plan);
    }
  };

  return (
    <div className="bg-[#F8F8F8] min-h-screen animate-pageEnter">

      {/* HEADER */}
      <PageHeader
        title="Membership Plans"
        subtitle="Choose the perfect membership plan designed for your fitness goals and lifestyle."
      />

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-maroon uppercase tracking-[3px] text-sm font-semibold">
              Pricing Plans
            </span>

            <h2 className="text-4xl font-bold text-black mt-4">
              Flexible Membership Options
            </h2>

            <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
              Whether you're just starting or training professionally,
              FitPro has a membership plan for every fitness journey.
            </p>
          </div>

          {/* PLANS */}
          {loading ? (
            <div className="flex justify-center py-24">
              <div className="w-14 h-14 border-4 border-maroon/20 border-t-maroon rounded-full animate-spin"></div>
            </div>
          ) : plans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={plan._id}
                  className="relative transition-all duration-300"
                >
                  <PlanCard 
                    key={plan._id} 
                    plan={plan} 
                    isSelected={selectedPlan?._id === plan._id}
                    highlighted={index === 1}
                    onSelect={handlePlanSelect}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-gray-200 p-14 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-black mb-3">
                No Plans Available
              </h3>

              <p className="text-gray-600">
                Membership plans will appear here once added.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-maroon uppercase tracking-[3px] text-sm font-semibold">
              Membership Benefits
            </span>

            <h2 className="text-4xl font-bold text-black mt-4">
              Why Join FitPro?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: 'Modern Equipment',
                desc: 'Train with premium strength and cardio machines.',
              },
              {
                title: 'Expert Trainers',
                desc: 'Get guidance from certified fitness professionals.',
              },
              {
                title: 'Flexible Access',
                desc: 'Workout at convenient hours that fit your routine.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-soft transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-maroon/10 flex items-center justify-center mb-6">
                  <div className="w-5 h-5 rounded-full bg-maroon"></div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-maroon uppercase tracking-[3px] text-sm font-semibold">
              FAQs
            </span>

            <h2 className="text-4xl font-bold text-black mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, memberships can be cancelled anytime with prior notice.',
              },
              {
                q: 'Do you offer free trials?',
                a: 'Yes, new members can enjoy a 7-day free trial.',
              },
              {
                q: 'Can I upgrade my plan later?',
                a: 'Absolutely. You can switch to a higher plan anytime.',
              },
              {
                q: 'Are there annual discounts?',
                a: 'Yes, we offer special discounts on yearly memberships.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-black mb-3">
                  {item.q}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#111111] rounded-[32px] px-8 md:px-16 py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-52 h-52 bg-maroon/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-52 h-52 bg-maroon/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="uppercase tracking-[4px] text-sm text-maroon font-semibold">
                Start Today
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-5">
                Your Fitness Journey Starts Here
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mt-6">
                Join FitPro Gym and train in a motivating environment
                built for real results.
              </p>
              <button className="mt-10 group bg-maroon hover:bg-maroon-dark transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 shadow-2xl hover:scale-105">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}