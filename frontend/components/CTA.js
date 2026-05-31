import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      
      <div className="container mx-auto px-6">
        
        <div className="bg-[#111111] rounded-[32px] px-8 md:px-16 py-16 text-center relative overflow-hidden">
          
          {/* Small Glow */}
          <div className="absolute top-0 right-0 w-52 h-52 bg-maroon/20 rounded-full blur-3xl"></div>

          {/* Small Text */}
          <span className="uppercase tracking-[4px] text-sm text-maroon font-semibold">
            Start Today
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-5">
            Ready To Change
            <span className="block mt-2">
              Your Lifestyle?
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mt-6">
            Join a modern fitness environment with expert trainers,
            premium equipment, and programs designed for real results.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            
            <Link href="/membership">
              <button className="group bg-maroon hover:bg-maroon-dark transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3">
                
                Start Free Trial
                
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
                Contact Us
              </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}