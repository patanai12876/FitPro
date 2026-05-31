'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TrainerCard from '@/components/TrainerCard';
import PageHeader from '@/components/PageHeader';
import { FaSearch } from 'react-icons/fa';

export default function TrainersPage() {
  const [trainers, setTrainers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [search, setSearch] = useState('');

  const specialties = [
    { name: 'strength', label: 'Strength' },
    { name: 'cardio', label: 'Cardio' },
    { name: 'yoga', label: 'Yoga' },
    { name: 'nutrition', label: 'Nutrition' },
    { name: 'crossfit', label: 'CrossFit' },
    { name: 'personal', label: 'Personal' },
  ];

  // ✅ HARD CODED TRAINERS
  const TRAINERS_DATA = [
    {
      _id: '1',
      name: 'Ahmed Khan',
      specialty: 'strength',
      bio: 'Strength coach with 8+ years experience',
      image: '/images/trainers/ahmed.jpg',
      experience: 8,
    },
    {
      _id: '2',
      name: 'Sarah Williams',
      specialty: 'cardio',
      bio: 'Cardio & endurance specialist',
      image: '/images/trainers/sarah.jpg',
      experience: 6,
    },
    {
      _id: '3',
      name: 'Priya Sharma',
      specialty: 'yoga',
      bio: 'Yoga & mindfulness expert',
      image: '/images/trainers/priya.jpg',
      experience: 7,
    },
    {
      _id: '4',
      name: 'Michael Johnson',
      specialty: 'nutrition',
      bio: 'Certified diet & nutrition coach',
      image: '/images/trainers/micheal.webp',
      experience: 9,
    },
    {
      _id: '5',
      name: 'Jessica Lee',
      specialty: 'crossfit',
      bio: 'CrossFit level 2 trainer',
      image: '/images/trainers/jessica1.avif',
      experience: 5,
    },
    {
      _id: '6',
      name: 'Robert Smith',
      specialty: 'personal',
      bio: 'Personal transformation coach',
      image: '/images/trainers/robert.webp',
      experience: 10,
    },
  ];

  useEffect(() => {
    setTrainers(TRAINERS_DATA);
    setFiltered(TRAINERS_DATA);
  }, []);

  useEffect(() => {
    filterTrainers();
  }, [selectedSpecialty, search, trainers]);

  const filterTrainers = () => {
    let result = [...trainers];

    if (selectedSpecialty) {
      result = result.filter((t) => t.specialty === selectedSpecialty);
    }

    if (search) {
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(search.toLowerCase()) ||
          t.bio.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] animate-pageEnter">

      <PageHeader title="Meet Our Trainers" />

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HERO TEXT */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Certified Fitness Experts
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Train with professional coaches who guide you step by step.
          </p>
        </div>

        {/* SEARCH */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <FaSearch className="absolute left-4 top-4 text-maroon" />
          <input
            type="text"
            placeholder="Search trainers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-black focus:outline-none focus:border-maroon"
          />
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">

          <button
            onClick={() => setSelectedSpecialty('')}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
              selectedSpecialty === ''
                ? 'bg-maroon text-white'
                : 'bg-white border border-gray-200 text-black hover:border-maroon'
            }`}
          >
            All
          </button>

          {specialties.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelectedSpecialty(item.name)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition capitalize ${
                selectedSpecialty === item.name
                  ? 'bg-maroon text-white'
                  : 'bg-white border border-gray-200 text-black hover:border-maroon'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* COUNT */}
        <div className="text-center text-gray-600 mb-8">
          Showing {filtered.length} trainers
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <TrainerCard key={t._id} trainer={t} />
          ))}
        </div>

      </div>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#111111] rounded-[32px] px-8 md:px-16 py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-52 h-52 bg-maroon/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <span className="uppercase tracking-[4px] text-sm text-maroon font-semibold">
                Start Your Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-5">
                Ready to Train with our Experts?
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mt-6">
                Join FitPro and get personalized guidance from our certified trainers.
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