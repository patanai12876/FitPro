'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import PageHeader from '@/components/PageHeader';
import { FaSearch, FaFilter, FaArrowRight, FaStar } from 'react-icons/fa';

const demoServices = [
  {
    _id: 'demo-1',
    name: 'Stretching & Mobility',
    description: 'Dedicated sessions to improve mobility, joint health, and prevent injuries.',
    category: 'flexibility',
    price: 25,
    duration: '45 min',
    image: '/images/services/strength1.jpg',
    features: ['Dynamic stretching', 'Foam rolling', 'Joint mobility'],
    rating: 4.8,
    isActive: true,
  },
  {
    _id: 'demo-2',
    name: 'CrossFit Training',
    description: 'Functional fitness training combining weightlifting, gymnastics, and cardio.',
    category: 'strength',
    price: 35,
    duration: '60 min',
    image: '/images/services/crossfit.webp',
    features: ['Community workouts', 'Progressive WODs', 'Strength building'],
    rating: 4.9,
    isActive: true,
  },
  {
    _id: 'demo-3',
    name: 'Spin Classes',
    description: 'Indoor cycling classes with motivating instructors and energetic music.',
    category: 'cardio',
    price: 30,
    duration: '45 min',
    image: '/images/services/spin.webp',
    features: ['RPM tracking', 'Interval training', 'Community rides'],
    rating: 4.9,
    isActive: true,
  },
  {
    _id: 'demo-4',
    name: 'Strength Coaching',
    description: 'Guided strength workouts designed to build power and improve technique.',
    category: 'strength',
    price: 40,
    duration: '60 min',
    image: '/images/services/pilates.jpg',
    features: ['Form correction', 'Progress tracking', 'Custom plans'],
    rating: 4.7,
    isActive: true,
  },
  {
    _id: 'demo-5',
    name: 'Recovery Session',
    description: 'Therapeutic recovery sessions to help your body heal and feel refreshed.',
    category: 'recovery',
    price: 28,
    duration: '50 min',
    image: '/images/services/stretching.webp',
    features: ['Foam therapy', 'Relaxation techniques', 'Stretch recovery'],
    rating: 4.8,
    isActive: true,
  },
  {
    _id: 'demo-6',
    name: 'Nutrition Coaching',
    description: 'Personalized nutrition guidance to support your fitness goals and lifestyle.',
    category: 'nutrition',
    price: 32,
    duration: '45 min',
    image: '/images/services/strength1.jpg',
    features: ['Meal planning', 'Macro tracking', 'Supplement advice'],
    rating: 4.6,
    isActive: true,
  },
];

export default function ServicesPage() {
  const [services, setServices] = useState(demoServices);
  const [filtered, setFiltered] = useState(demoServices);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const categories = [
    { name: 'cardio', label: 'Cardio', color: 'from-blue-600 to-blue-700' },
    { name: 'strength', label: 'Strength', color: 'from-red-600 to-red-700' },
    { name: 'flexibility', label: 'Flexibility', color: 'from-purple-600 to-purple-700' },
    { name: 'group classes', label: 'Group Classes', color: 'from-orange-600 to-orange-700' },
    { name: 'recovery', label: 'Recovery', color: 'from-green-600 to-green-700' },
    { name: 'nutrition', label: 'Nutrition', color: 'from-yellow-600 to-yellow-700' },
  ];

  useEffect(() => {
    filterServices();
  }, [selectedCategory, search, services]);

  const filterServices = () => {
    let result = [...services];

    if (selectedCategory) {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (search) {
      result = result.filter(
        (item) =>
          item.name?.toLowerCase().includes(search.toLowerCase()) ||
          item.description?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  };

  const getCategoryData = (categoryName) => {
    return categories.find((cat) => cat.name === categoryName);
  };

  return (
    <div className="bg-white min-h-screen animate-pageEnter">
      {/* PAGE HEADER */}
      <PageHeader title="Our Services & Facilities" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* HERO SECTION */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-maroon/10 border border-maroon/30 rounded-full text-maroon font-semibold text-sm">
              Premium Fitness Programs
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight leading-tight">
            Transform Your Body <br className="hidden md:block" />
            <span className="text-maroon">
              with Expert Services
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our wide range of premium fitness services designed by experts to help you achieve your goals faster.
          </p>
        </div>

        {/* BENEFITS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 hover:border-maroon/50 hover:shadow-lg transition-all duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-maroon/5 rounded-full blur-3xl group-hover:bg-maroon/10 transition-all duration-300"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-maroon to-maroon-dark rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-black mb-2">Proven Results</h3>
              <p className="text-gray-600">Track your progress with data-driven training programs</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 hover:border-maroon/50 hover:shadow-lg transition-all duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-maroon/5 rounded-full blur-3xl group-hover:bg-maroon/10 transition-all duration-300"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-maroon to-maroon-dark rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-black mb-2">Expert Trainers</h3>
              <p className="text-gray-600">Learn from certified fitness professionals</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 hover:border-maroon/50 hover:shadow-lg transition-all duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-maroon/5 rounded-full blur-3xl group-hover:bg-maroon/10 transition-all duration-300"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-maroon to-maroon-dark rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-black mb-2">Personalized Plans</h3>
              <p className="text-gray-600">Custom programs tailored to your goals</p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent"></div>
          <span className="text-gray-600 text-sm font-semibold">Explore Our Services</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent"></div>
        </div>

        {/* SEARCH BAR */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto relative mb-8">
            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-maroon text-lg" />
            <input
              type="text"
              placeholder="Search services by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-500 
                         focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/30 transition-all duration-300 text-base"
            />
          </div>
        {/* CATEGORY FILTER */}
<div className="flex flex-wrap justify-center gap-3 mb-12">

  <button
    onClick={() => setSelectedCategory('')}
    className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300
    ${
      selectedCategory === ''
        ? 'bg-maroon border-maroon text-white'
        : 'bg-white border-gray-200 text-black hover:border-maroon hover:text-maroon'
    }`}
  >
    All Services
  </button>

  {categories.map((cat) => (
    <button
      key={cat.name}
      onClick={() => setSelectedCategory(cat.name)}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 focus:outline-none
      ${
        selectedCategory === cat.name
          ? 'bg-maroon border-maroon text-white'
          : 'bg-white border-gray-200 text-black hover:border-maroon hover:text-maroon'
      }`}
    >
      {cat.label}
    </button>
  ))}

</div>

          {/* RESULTS INFO */}
          <div className="mt-6 text-sm text-gray-600">
            Showing <span className="text-maroon font-semibold">{filtered.length}</span> of{' '}
            <span className="text-maroon font-semibold">{services.length}</span> services
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"></div>

        {/* SERVICES GRID */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-maroon to-maroon-dark rounded-full animate-spin opacity-75"></div>
              <div className="absolute inset-2 bg-white rounded-full"></div>
            </div>
            <p className="text-gray-600 font-semibold">Loading premium services...</p>
          </div>
        ) : (
          <>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((service, index) => (
                  <div
                    key={service._id}
                    className="animate-in slide-in-from-bottom-4 fade-in duration-500"
                    style={{ animationDelay: `${index * 75}ms` }}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <div className="w-24 h-24 bg-maroon/10 rounded-2xl mb-8"></div>
                <h3 className="text-3xl font-bold text-black mb-3">No Services Found</h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  {search
                    ? `No services match "${search}". Try adjusting your search terms.`
                    : 'Try selecting a different category to explore our premium services.'}
                </p>
                <button
                  onClick={() => {
                    setSearch('');
                    setSelectedCategory('');
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-maroon to-maroon-dark text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-maroon/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#111111] rounded-[32px] px-8 md:px-16 py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-52 h-52 bg-maroon/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <span className="uppercase tracking-[4px] text-sm text-maroon font-semibold">
                Transform Now
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-5">
                Ready to Transform?
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mt-6">
                Start your fitness journey with our expert trainers and premium services today.
              </p>
              <Link href="/membership">
                <button className="mt-10 group bg-maroon hover:bg-maroon-dark transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 shadow-2xl hover:scale-105">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}