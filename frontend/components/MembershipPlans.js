'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MembershipPlans() {
  const [loading, setLoading] = useState(true);
  const [headingRef, isHeadingVisible] = useScrollAnimation();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="relative py-28 bg-[#f7f7f7] overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-maroon/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-red-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div 
          ref={headingRef}
          className={`text-center max-w-3xl mx-auto mb-20 ${isHeadingVisible ? 'animate-scrollSlideLeft' : 'opacity-0'}`}
        >
          
          <span className="uppercase tracking-[4px] text-sm text-maroon font-semibold">
            Flexible Pricing
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            Membership Plans
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            Choose a fitness membership that matches your lifestyle,
            training goals, and budget. Start your transformation today.
          </p>
        </div>

        {/* CTA Section */}
        <div className="animate-scaleIn text-center bg-gradient-to-r from-maroon/5 to-red-400/5 rounded-3xl border border-maroon/20 p-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Membership Plan
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            View all our flexible membership options designed for every fitness goal and budget
          </p>
          
          <Link href="/membership">
            <button className="group inline-flex items-center gap-3 bg-maroon hover:bg-maroon-dark transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105">
              
              View Membership Plans
              
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </Link>

          <p className="text-gray-500 mt-6 text-sm">
            No hidden charges • Cancel anytime • 24/7 support
          </p>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          
          <div className="animate-stagger-1 bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-maroon mb-3">
              Modern Equipment
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Access premium fitness machines and professional workout
              zones designed for all training styles.
            </p>
          </div>

          <div className="animate-stagger-2 bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-maroon mb-3">
              Expert Guidance
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Get personalized support and fitness coaching from certified
              professional trainers.
            </p>
          </div>

          <div className="animate-stagger-3 bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-maroon mb-3">
              Flexible Access
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Train anytime with flexible memberships and a motivating
              fitness environment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}