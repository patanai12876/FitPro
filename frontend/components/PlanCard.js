export default function PlanCard({ plan, isSelected, onSelect }) {
  const handleCardClick = () => {
    onSelect(plan._id === isSelected?._id ? null : plan);
  };

  const handleEnrollClick = (e) => {
    e.stopPropagation();
    onSelect(plan);
    window.location.href = `/contact?plan=${plan.name}&price=${plan.price}`;
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`group relative rounded-3xl overflow-hidden h-full min-h-[700px] flex flex-col transition-all duration-500 cursor-pointer transform ${
        isSelected?._id === plan._id 
          ? 'ring-4 ring-maroon shadow-2xl scale-105 -translate-y-4' 
          : 'border-2 border-maroon/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-maroon'
      }`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isSelected?._id === plan._id
          ? 'bg-gradient-to-br from-maroon to-red-700'
          : 'bg-white'
      }`}></div>

      {/* Corner Glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-maroon/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative p-8 flex flex-col flex-grow z-10">
        
        {/* Selected Badge */}
        {isSelected?._id === plan._id && (
          <div className="mb-4 inline-flex items-center gap-2 w-fit">
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full font-bold text-xs animate-pulse">
              ★ Selected Plan
            </span>
          </div>
        )}

        {/* Plan Name */}
        <h3 className={`text-3xl font-bold mb-3 transition-colors duration-300 ${
          isSelected?._id === plan._id ? 'text-white' : 'text-gray-900'
        }`}>
          {plan.name}
        </h3>

        {/* Price Section */}
        <div className={`mb-2 transition-colors duration-300 ${
          isSelected?._id === plan._id ? 'text-white' : 'text-maroon'
        }`}>
          <span className="text-5xl font-bold">${plan.price}</span>
          <span className={`text-lg ml-2 ${isSelected?._id === plan._id ? 'text-gray-100' : 'text-gray-600'}`}>
            / {plan.duration} days
          </span>
        </div>

        {/* Discount */}
        {plan.discount > 0 && (
          <div className={`mb-6 text-sm font-bold inline-block px-3 py-1 rounded-full ${
            isSelected?._id === plan._id 
              ? 'bg-yellow-400/30 text-yellow-100' 
              : 'bg-maroon/10 text-maroon'
          }`}>
             Save {plan.discount}% annually
          </div>
        )}

        {/* Description */}
        <p className={`mb-6 text-sm leading-relaxed ${
          isSelected?._id === plan._id ? 'text-gray-100' : 'text-gray-600'
        }`}>
          {plan.description}
        </p>

        {/* Divider */}
        <div className={`h-0.5 mb-6 ${
          isSelected?._id === plan._id ? 'bg-white/20' : 'bg-maroon/20'
        }`}></div>

        {/* Features */}
        <div className="mb-8 flex-grow">
          <p className={`font-bold text-sm mb-4 uppercase tracking-wide ${
            isSelected?._id === plan._id ? 'text-white/90' : 'text-gray-700'
          }`}>
            What's Included:
          </p>
          <ul className="space-y-3 max-h-[240px] overflow-y-auto pr-2">
            {plan.features && plan.features.slice(0, 8).map((feature, idx) => (
              <li 
                key={idx} 
                className={`flex items-start gap-3 text-sm transition-all duration-300 ${
                  isSelected?._id === plan._id ? 'text-gray-100' : 'text-gray-700'
                }`}
              >
                <span className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  isSelected?._id === plan._id 
                    ? 'bg-white/30 text-white' 
                    : 'bg-maroon/20 text-maroon'
                }`}>
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Trial Days */}
        {plan.trialDays > 0 && (
          <div className={`text-center text-xs font-semibold mb-6 py-3 rounded-xl ${
            isSelected?._id === plan._id 
              ? 'bg-white/10 text-white' 
              : 'bg-maroon/5 text-maroon'
          }`}>
             {plan.trialDays} Days Free Trial
          </div>
        )}

        {/* Enroll Button */}
        <button 
          onClick={handleEnrollClick}
          className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            isSelected?._id === plan._id
              ? 'bg-white text-maroon hover:bg-gray-100 shadow-xl hover:shadow-2xl'
              : 'bg-maroon text-white hover:from-maroon-dark hover:to-red-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isSelected?._id === plan._id ? 'Proceed to Enrollment' : 'Get Started'}
        </button>
      </div>

      {/* Bottom Glow Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-500 ${
        isSelected?._id === plan._id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
      }`}></div>
    </div>
  );
}
