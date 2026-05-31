'use client';

import {
  FaUsers,
  FaDumbbell,
  FaAward,
  FaCalendar,
} from 'react-icons/fa';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function GymStats() {
  const [headingRef, isHeadingVisible] = useScrollAnimation();

  const stats = [
    {
      icon: FaUsers,
      value: '5000+',
      label: 'Active Members',
    },
    {
      icon: FaDumbbell,
      value: '50+',
      label: 'Modern Equipment',
    },
    {
      icon: FaAward,
      value: '20+',
      label: 'Certified Trainers',
    },
    {
      icon: FaCalendar,
      value: '15+',
      label: 'Years Experience',
    },
  ];

  return (
    <section className="relative bg-[#f8f8f8] py-24 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-maroon/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div 
          ref={headingRef}
          className={`text-center mb-16 ${isHeadingVisible ? 'animate-scrollSlideLeft' : 'opacity-0'}`}
        >
          <span className="text-maroon uppercase tracking-[4px] font-semibold text-sm">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Stronger Every Day
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-5 text-lg">
            We provide world-class fitness facilities, expert coaching,
            and a supportive environment to help you achieve your goals.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className={`group animate-fadeInUp bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-maroon/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Icon className="text-maroon text-4xl" />
                </div>

                {/* Number */}
                <h3 className="text-4xl font-extrabold text-gray-900 mb-3">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-gray-600 text-lg">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}