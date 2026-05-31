'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from 'react-icons/fa';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const planName = searchParams.get('plan');
  const planPrice = searchParams.get('price');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: planName ? `Enrollment Inquiry: ${planName}` : '',
    message: '',
    inquiryType: planName ? 'membership' : 'general',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (planName) {
      setFormData((prev) => ({
        ...prev,
        subject: `Enrollment Inquiry: ${planName}`,
        inquiryType: 'membership',
      }));
    }
  }, [planName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('');
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/inquiries`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          inquiryType: 'general',
        });
        setTimeout(() => setSuccess(false), 4000);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
        console.error('Submission error:', data);
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Failed to send inquiry:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'info@fitprogym.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: '123 Fitness Street, New York',
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      value: 'Mon - Sat : 5AM - 10PM',
    },
  ];

  return (
    <div className="bg-[#f8f8f8] min-h-screen animate-pageEnter">
      
      {/* HEADER */}
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team and start your fitness journey today."
      />

      {/* MAIN SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div>

              {/* TOP TEXT */}
              <div className="mb-10">
                <span className="text-maroon uppercase tracking-[3px] text-sm font-semibold">
                  Get In Touch
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                  Let’s Build Your
                  <span className="text-maroon"> Strongest Version</span>
                </h2>

                <p className="text-gray-600 mt-5 leading-relaxed text-lg">
                  Whether you want to join our gym, ask about memberships,
                  or talk to a trainer — our team is always ready to help.
                </p>
              </div>

              {/* CONTACT CARDS */}
              <div className="grid sm:grid-cols-2 gap-5">

                {contactCards.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-maroon/10 flex items-center justify-center text-maroon text-xl mb-5">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                ))}

              </div>

              {/* HOURS */}
              <div className="mt-8 bg-black text-white rounded-3xl p-8 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-60 h-60 bg-maroon/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <span className="text-maroon uppercase tracking-[3px] text-sm font-semibold">
                    Gym Schedule
                  </span>

                  <h3 className="text-3xl font-bold mt-3 mb-6">
                    Opening Hours
                  </h3>

                  <div className="space-y-4 text-gray-300">

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span>Monday - Friday</span>
                      <span>5:00 AM - 10:00 PM</span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span>Saturday</span>
                      <span>6:00 AM - 9:00 PM</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>7:00 AM - 8:00 PM</span>
                    </div>

                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100">

              <div className="mb-8">
                <span className="text-maroon uppercase tracking-[3px] text-sm font-semibold">
                  Contact Form
                </span>

                <h2 className="text-4xl font-bold text-gray-900 mt-4">
                  Send A Message
                </h2>
              </div>

              {/* PLAN INFO DISPLAY */}
              {planName && (
                <div className="mb-6 bg-maroon/10 border border-maroon/30 rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Selected Plan:</p>
                      <p className="text-xl font-bold text-maroon">{planName}</p>
                      <p className="text-sm text-gray-700 mt-1">${planPrice} per month</p>
                    </div>
                    <div className="text-4xl text-maroon opacity-30">✓</div>
                  </div>
                </div>
              )}

              {success && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-2xl">
                  Your message has been sent successfully.
                </div>
              )}

              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white text-base font-medium focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition placeholder:text-gray-400"
                      style={{ color: '#000000' }}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white text-base font-medium focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition placeholder:text-gray-400"
                      style={{ color: '#000000' }}
                    />
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white text-base font-medium focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition placeholder:text-gray-400"
                      style={{ color: '#000000' }}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Inquiry Type
                    </label>

                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white text-base font-medium focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition"
                      style={{ color: '#000000' }}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="trial-booking">Trial Booking</option>
                      <option value="trainer-request">Trainer Request</option>
                      <option value="membership">Membership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter your subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white text-base font-medium focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition placeholder:text-gray-400"
                    style={{ color: '#000000' }}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    placeholder="Enter your message here"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white text-base font-medium focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition resize-none placeholder:text-gray-400"
                    style={{ color: '#000000' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-2xl bg-maroon hover:bg-maroon-dark text-white font-semibold text-lg transition duration-300 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>

              </form>

            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-8 text-center">
            <span className="text-maroon uppercase tracking-[3px] text-sm font-semibold">
              Visit Us
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Find Our Gym
            </h2>
          </div>

          <div className="overflow-hidden rounded-[32px] shadow-lg border border-gray-200 h-[500px]">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2361dd5d1b%3A0xabcdef123456!2s123%20Fitness%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#111111] rounded-[32px] px-8 md:px-16 py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-52 h-52 bg-maroon/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <span className="uppercase tracking-[4px] text-sm text-maroon font-semibold">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-5">
                Have Any Questions?
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mt-6">
                Our team is here to help! Reach out to us and we'll respond within 24 hours.
              </p>
              <button className="mt-10 group bg-maroon hover:bg-maroon-dark transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 shadow-2xl hover:scale-105">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}