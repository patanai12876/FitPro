import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function TrainerCard({ trainer }) {
  const specialtyIcons = {
    strength: '💪',
    cardio: '🏃',
    yoga: '🧘',
    nutrition: '🥗',
    crossfit: '🏋️',
    personal: '👤',
  };

  const specialtyLabels = {
    strength: 'Strength Training',
    cardio: 'Cardio & Endurance',
    yoga: 'Yoga & Wellness',
    nutrition: 'Nutrition Coach',
    crossfit: 'CrossFit',
    personal: 'Personal Training',
  };

  const specialtyColors = {
    strength: 'bg-red-500/10 text-red-700 border border-red-200',
    cardio: 'bg-blue-500/10 text-blue-700 border border-blue-200',
    yoga: 'bg-purple-500/10 text-purple-700 border border-purple-200',
    nutrition: 'bg-amber-500/10 text-amber-700 border border-amber-200',
    crossfit: 'bg-orange-500/10 text-orange-700 border border-orange-200',
    personal: 'bg-maroon/10 text-maroon border border-maroon/30',
  };

  return (
    <div className="group relative h-full overflow-hidden rounded-3xl bg-white border-2 border-maroon/20 shadow-lg hover:shadow-2xl hover:border-maroon transition-all duration-500 hover:-translate-y-3 flex flex-col">
      
      {/* IMAGE SECTION WITH OVERLAY */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        {trainer.image ? (
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-maroon/40 to-red-400/30 flex items-center justify-center">
            <span className="text-6xl">{specialtyIcons[trainer.specialty] || '💪'}</span>
          </div>
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* NAME */}
        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-maroon transition-colors duration-300">
          {trainer.name}
        </h3>

        {/* BIO */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors">
          {trainer.bio || 'Professional fitness trainer'}
        </p>

        {/* DIVIDER */}
        <div className="h-0.5 bg-gradient-to-r from-maroon/30 to-transparent mb-4"></div>

        {/* STATS SECTION */}
        <div className="flex items-center justify-between mb-6">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <span className="text-sm font-bold text-gray-900 ml-1">5.0</span>
          </div>

          {/* Session Count */}
          <div className="text-right">
            <p className="text-xs text-gray-600">Premium Coach</p>
            <p className="text-sm font-bold text-maroon">Available</p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <Link href="/contact" className="mt-auto">
          <button className="w-full group/btn relative overflow-hidden bg-maroon hover:from-maroon-dark hover:to-red-700 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
            <span>Book Session</span>
            <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
          </button>
        </Link>
      </div>

      {/* BOTTOM ACCENT GLOW */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-maroon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* CORNER GLOW EFFECT (OPTIONAL) */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-maroon/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}
