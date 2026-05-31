import Link from 'next/link';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white border-t border-white/10">

      <div className="container mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold">
              FitPro <span className="text-maroon">Gym</span>
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed text-sm">
              Your ultimate fitness destination with modern equipment,
              expert trainers, and a motivating environment to transform
              your lifestyle.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-maroon transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-maroon transition">Services</Link></li>
              <li><Link href="/trainers" className="hover:text-maroon transition">Trainers</Link></li>
              <li><Link href="/membership" className="hover:text-maroon transition">Membership</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <div className="space-y-3 text-gray-400 text-sm">

              <div className="flex items-center gap-2">
                <FaPhone className="text-maroon" />
                +1 (555) 123-4567
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-maroon" />
                info@fitprogym.com
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-maroon" />
                123 Fitness St, New York
              </div>

            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>

            <div className="flex gap-4 text-xl">

              <a href="#" className="text-gray-400 hover:text-maroon transition">
                <FaFacebook />
              </a>

              <a href="#" className="text-gray-400 hover:text-maroon transition">
                <FaInstagram />
              </a>

              <a href="#" className="text-gray-400 hover:text-maroon transition">
                <FaTwitter />
              </a>

              <a href="#" className="text-gray-400 hover:text-maroon transition">
                <FaYoutube />
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          

          <p>
            © 2026 FitPro Gym. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}