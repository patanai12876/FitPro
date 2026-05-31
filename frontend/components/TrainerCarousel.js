'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import TrainerCard from './TrainerCard';
import { FaArrowRight } from 'react-icons/fa';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TrainerCarousel() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [headerRef, isHeaderVisible] = useScrollAnimation();

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/trainers`
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      setTrainers((data.data || []).slice(0, 3));
    } catch (error) {
      console.error('Failed to fetch trainers:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-maroon/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 ${isHeaderVisible ? 'animate-scrollSlideLeft' : 'opacity-0'}`}
        >
          
          <div className="max-w-2xl">
            
            <span className="uppercase tracking-[4px] text-sm text-maroon font-semibold">
              Elite Coaching
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
              Meet Our Expert Trainers
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              Our certified fitness coaches help you stay motivated,
              improve performance, and achieve your transformation goals
              with personalized training plans.
            </p>
          </div>

          {/* Button */}
          <div className="animate-fadeInRight">
            <Link href="/trainers">
              <button className="group flex items-center gap-3 bg-maroon hover:bg-maroon-dark transition-all duration-300 text-white px-7 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105">
                View All Trainers
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </Link>
          </div>

        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[420px] rounded-3xl bg-white/10 animate-pulse"
              />
            ))}

          </div>
        ) : (
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {trainers.map((trainer, index) => (
              <div
                key={trainer._id}
                className="group animate-fadeInUp transition-all duration-500 hover:-translate-y-3"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl">
                  
                  {/* Gradient Border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-maroon/20 to-transparent pointer-events-none"></div>

                  <TrainerCard trainer={trainer} />
                </div>
              </div>
            ))}

          </div>
        )}

        {/* Bottom Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-maroon mb-3">
              1-on-1
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Personalized coaching sessions tailored to your body goals
              and fitness level.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-maroon mb-3">
              Nutrition
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Professional meal guidance and diet planning for maximum
              results.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-maroon mb-3">
              Motivation
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Stay consistent and disciplined with expert support and
              progress tracking.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}