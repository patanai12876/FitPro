import Link from 'next/link';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        
        <div className="max-w-3xl">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8  mt-12">
            <span className="w-2 h-2 rounded-full bg-maroon animate-pulse"></span>
            <span className="text-sm tracking-wide text-gray-300">
              BEST FITNESS EXPERIENCE
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fadeInUp text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Push Your Body
            <span className="block text-maroon">
              Beyond Limits
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
            Premium fitness club with modern equipment, professional trainers,
            personalized workout plans, and an atmosphere that keeps you
            motivated every day.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mb-14">
            
            <Link href="/membership">
              <button className="group bg-maroon hover:bg-maroon-dark px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl hover:scale-105">
                Start Today
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="flex items-center gap-3 border border-white/20 bg-white/10 hover:bg-white hover:text-black backdrop-blur-md px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                <FaPlay className="text-sm" />
                Contact Us
              </button>
            </Link>

          </div>

          {/* Bottom Stats */}
          <div className="flex flex-wrap gap-10">
            
            <div>
              <h3 className="text-4xl font-bold text-maroon">5K+</h3>
              <p className="text-gray-400 mt-1">Happy Members</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-maroon">20+</h3>
              <p className="text-gray-400 mt-1">Expert Coaches</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-maroon">24/7</h3>
              <p className="text-gray-400 mt-1">Gym Access</p>
            </div>

          </div>
        </div>
      </div>

      

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
}