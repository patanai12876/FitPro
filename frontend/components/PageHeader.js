export default function PageHeader({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] pt-32 pb-20 border-b border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-maroon/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-maroon/10 rounded-full blur-3xl"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Small Label */}
        <span className="text-maroon uppercase tracking-[3px] text-sm font-semibold">
          FitPro Gym
        </span>

        {/* Title */}
        <h1 className="mt-5 text-5xl md:text-6xl font-bold text-white leading-tight">
          {title}
        </h1>

        {/* Optional Subtitle */}
        {subtitle && (
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Line */}
        <div className="mt-7 flex justify-center">
          <div className="w-24 h-[3px] rounded-full bg-maroon"></div>
        </div>

      </div>
    </section>
  );
}