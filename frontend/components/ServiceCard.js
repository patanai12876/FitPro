import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ service }) {
  const categoryIcons = {
    cardio: "🏃",
    strength: "💪",
    flexibility: "🧘",
    "group classes": "👥",
    recovery: "🛟",
    nutrition: "🥗",
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border-2 border-maroon/20 shadow-lg hover:shadow-2xl hover:border-maroon transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
      
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-maroon/30 to-red-400/20 flex items-center justify-center">
            <span className="text-4xl">{categoryIcons[service.category?.toLowerCase()] || "💪"}</span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-maroon transition-colors duration-300 line-clamp-2">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {service.description}
        </p>

        {/* Features */}
        {service.features?.length > 0 && (
          <div className="space-y-2.5 mb-4 pb-4 border-b-2 border-maroon/10">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-maroon to-red-600 mt-1.5 flex-shrink-0"></div>
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Rating */}
        <div className="mt-auto flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
          <span className="text-sm font-bold text-gray-900">{service.rating ? service.rating.toFixed(1) : "5.0"}</span>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="h-1 bg-gradient-to-r from-maroon via-red-500 to-maroon opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}