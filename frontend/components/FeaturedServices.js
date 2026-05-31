'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { FaArrowRight, FaDumbbell, FaFire, FaHeartbeat, FaUsers } from 'react-icons/fa';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FeaturedServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [leftRef, isLeftVisible] = useScrollAnimation();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/services`
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      setServices((data.data || []).slice(0, 3));
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-28 bg-[#f8f8f8] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-maroon/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Content */}
          <div 
            ref={leftRef}
            className={`${isLeftVisible ? 'animate-scrollSlideLeft' : 'opacity-0'}`}
          >
            <span className="text-maroon uppercase tracking-[4px] text-sm font-semibold">
              Complete Fitness Solutions
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-6 leading-tight">
              Transform Your <span className="text-maroon">Fitness Journey</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              Access our complete range of premium fitness programs, state-of-the-art equipment, and expert-led classes designed for every fitness level and goal.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mt-10">
              <div className="animate-stagger-1 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-maroon/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaDumbbell className="text-maroon text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Strength Training</h4>
                  <p className="text-sm text-gray-600">Professional equipment</p>
                </div>
              </div>

              <div className="animate-stagger-2 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-maroon/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaHeartbeat className="text-maroon text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Cardio & Classes</h4>
                  <p className="text-sm text-gray-600">High-energy group sessions</p>
                </div>
              </div>

              <div className="animate-stagger-3 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-maroon/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaUsers className="text-maroon text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Expert Guidance</h4>
                  <p className="text-sm text-gray-600">Certified professionals</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/services">
              <button className="group mt-10 flex items-center gap-3 bg-maroon hover:bg-maroon-dark transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105">
                Explore All Services
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </Link>
          </div>

          {/* Right Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="animate-stagger-1 bg-gradient-to-br from-maroon to-maroon-dark rounded-3xl p-8 text-white shadow-xl">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-maroon-light">Premium Programs</p>
            </div>

            {/* Card 2 */}
            <div className="animate-stagger-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition">
              <div className="text-4xl font-bold text-maroon mb-2">20+</div>
              <p className="text-gray-600">Expert Trainers</p>
            </div>

            {/* Card 3 */}
            <div className="animate-stagger-3 bg-white rounded-3xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition sm:col-span-2 sm:max-w-md">
              <div className="text-4xl font-bold text-maroon mb-2">24/7</div>
              <p className="text-gray-600">Gym Access & Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}