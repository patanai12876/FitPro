'use client';

import { useState, useEffect } from 'react';
import { FaEnvelope, FaUser, FaClock, FaFilter } from 'react-icons/fa';

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    pending: 0,
    resolved: 0,
  });

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const loginRes = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: 'admin@gymwebsite.com',
            password: 'admin123'
          })
        });

        const loginData = await loginRes.json();

        if (!loginData.token) {
          setError('Authentication failed');
          setLoading(false);
          return;
        }

        const statsRes = await fetch(
          'http://localhost:5000/api/inquiries/stats/dashboard',
          { headers: { Authorization: `Bearer ${loginData.token}` } }
        );

        const statsData = await statsRes.json();
        setStats(statsData.data);

        const inquiriesRes = await fetch(
          'http://localhost:5000/api/inquiries?page=1&limit=50',
          { headers: { Authorization: `Bearer ${loginData.token}` } }
        );

        const inquiriesData = await inquiriesRes.json();
        setInquiries(inquiriesData.data || []);
      } catch (err) {
        setError('Failed to fetch inquiries');
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  const filteredInquiries =
    filter === 'all'
      ? inquiries
      : inquiries.filter((i) => i.status === filter);

  const getStatusBadge = (status) => {
    const base =
      'px-3 py-1 text-xs font-semibold rounded-full border';

    switch (status) {
      case 'new':
        return (
          <span className={`${base} border-red-500 text-red-500`}>
            New
          </span>
        );
      case 'pending':
        return (
          <span className={`${base} border-yellow-500 text-yellow-500`}>
            Pending
          </span>
        );
      case 'resolved':
        return (
          <span className={`${base} border-green-600 text-green-600`}>
            Resolved
          </span>
        );
      default:
        return (
          <span className={`${base} border-gray-400 text-gray-400`}>
            Closed
          </span>
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="w-14 h-14 border-4 border-maroon border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white animate-pageEnter">

      {/* HEADER */}
      <div className="bg-black border-b border-white/10 px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-maroon">
            Contact Submissions
          </h1>
          <p className="text-gray-400 mt-2">
            Manage all customer inquiries
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          {[
            { label: 'Total', value: stats.total },
            { label: 'New', value: stats.new },
            { label: 'Pending', value: stats.pending },
            { label: 'Resolved', value: stats.resolved },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-white/10 p-6 rounded-xl"
            >
              <p className="text-gray-400 text-sm">{s.label}</p>
              <h2 className="text-3xl font-bold text-white mt-2">
                {s.value}
              </h2>
            </div>
          ))}
        </div>

        {/* FILTER */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {['all', 'new', 'pending', 'resolved'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg border transition ${
                filter === f
                  ? 'bg-maroon text-white border-maroon'
                  : 'border-white/10 text-gray-300 hover:border-maroon'
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* LIST */}
        <div className="space-y-5">

          {filteredInquiries.map((inq) => (
            <div
              key={inq._id}
              className="bg-[#111111] border border-white/10 rounded-xl p-6"
            >

              <div className="flex justify-between flex-wrap gap-4">

                <div>
                  <p className="text-gray-400 text-sm">From</p>
                  <p className="text-white font-semibold">
                    {inq.name}
                  </p>
                  <p className="text-maroon text-sm">
                    {inq.email}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Subject</p>
                  <p className="text-white font-semibold">
                    {inq.subject}
                  </p>
                  <div className="mt-2">
                    {getStatusBadge(inq.status)}
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-gray-400 text-sm">Date</p>
                  <p className="text-white text-sm">
                    {new Date(inq.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mt-4 text-sm">
                {inq.message}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}