'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
     { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/trainers', label: 'Trainers' },
    { href: '/membership', label: 'Membership' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <header className="fixed top-0 left-0 w-full z-50 animate-fadeInDown">

      {/* MAROON THEME NAVBAR */}
      <div className="bg-[#14060a]/95 backdrop-blur-xl border-b border-maroon/20">

        <nav className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">

            <div className="w-8 h-8 bg-maroon rounded-md flex items-center justify-center text-white font-bold text-sm">
              FP
            </div>

            <div className="leading-tight">
              <h1 className="text-white text-sm font-bold">
                FitPro
              </h1>
              <p className="text-maroon text-[10px] font-semibold">
                Gym
              </p>
            </div>

          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-1">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm transition ${
                  isActive(link.href)
                    ? 'bg-maroon text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}

          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/membership">
              <button className="bg-maroon hover:bg-maroon-dark text-white px-4 py-1.5 rounded-md text-sm font-semibold transition">
                Join Now
              </button>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

        </nav>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden bg-[#14060a] border-t border-maroon/20 px-5 py-3 space-y-2">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm transition ${
                  isActive(link.href)
                    ? 'bg-maroon text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/membership">
              <button className="w-full mt-3 bg-maroon text-white py-2 rounded-md text-sm font-semibold">
                Join Now
              </button>
            </Link>

          </div>
        )}

      </div>
    </header>
  );
}