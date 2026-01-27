import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/notices');
        setNotices(res.data);
      } catch (err) {
        console.error("Error loading notices");
      }
    };
    fetchNotices();
  }, []);

  return (
    <div className="overflow-x-hidden w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <div className="relative bg-blue-800 py-16 px-8 text-center text-white mb-0">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Excellence in Education
          </h1>
          <p className="text-blue-100 text-lg mb-8">
            Empowering students to achieve their dreams through innovation, 
            discipline, and a global perspective.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
              Admission 2026
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* 2. Ticker Section */}
      {notices.length > 0 && (
        <div className="w-full bg-blue-900 text-white py-2 overflow-hidden whitespace-nowrap border-b border-blue-700">
          <div className="inline-block animate-marquee hover:pause cursor-pointer">
            {notices.map((n) => (
              <span key={n._id} className="mx-10 font-medium italic inline-block">
                📢 {n.title}: {n.content.substring(0, 50)}...
              </span>
            ))}
            {notices.map((n) => (
              <span key={`${n._id}-clone`} className="mx-10 font-medium italic inline-block">
                📢 {n.title}: {n.content.substring(0, 50)}...
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Stats Section */}
<div className="bg-gray-50 py-12 border-b">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      
      {/* Stat 1 */}
      <div className="p-4">
        <h2 className="text-4xl font-extrabold text-blue-800">1500+</h2>
        <p className="text-gray-600 font-medium">Students enrolled</p>
      </div>

      {/* Stat 2 */}
      <div className="p-4">
        <h2 className="text-4xl font-extrabold text-blue-800">50+</h2>
        <p className="text-gray-600 font-medium">Expert Teachers</p>
      </div>

      {/* Stat 3 */}
      <div className="p-4">
        <h2 className="text-4xl font-extrabold text-blue-800">20+</h2>
        <p className="text-gray-600 font-medium">Extra-curriculars</p>
      </div>

      {/* Stat 4 */}
      <div className="p-4">
        <h2 className="text-4xl font-extrabold text-blue-800">100%</h2>
        <p className="text-gray-600 font-medium">Success Rate</p>
      </div>

    </div>
  </div>
</div>

<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
    {/* Contact Form */}
    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Get in Touch</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Parent Name" className="w-full p-3 border rounded-lg outline-blue-500" />
        <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg outline-blue-500" />
        <textarea placeholder="Your Message..." className="w-full p-3 border rounded-lg h-32 outline-blue-500"></textarea>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>

    {/* Quick Info & Map Placeholder */}
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Visit Us</h2>
      <p className="text-gray-600 mb-4 font-medium">📍 123 Education Lane, Learning City, 45678</p>
      <p className="text-gray-600 mb-4 font-medium">📞 +1 (234) 567-890</p>
      <p className="text-gray-600 mb-8 font-medium">✉️ info@schoolportal.edu</p>
      <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
        <span className="text-gray-500 font-bold text-lg text-center px-4">
          Google Maps API Integration <br/> (Placeholder)
        </span>
      </div>
    </div>
  </div>
</section>

      {/* 3. Main Content Section */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Latest Announcements</h1>
        <div className="max-w-4xl mx-auto space-y-4">
          {notices.length > 0 ? (
            notices.map((n) => (
              <div key={n._id} className="p-4 border-l-4 border-blue-600 bg-gray-50 shadow-sm rounded-r-md hover:bg-gray-100 transition">
                <h3 className="font-bold text-xl">{n.title}</h3>
                <p className="text-gray-600">{n.content}</p>
                <span className="text-xs text-gray-400">
                  {new Date(n.date).toLocaleDateString()}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No new notices at this time.</p>
          )}
        </div>
      </div>
    </div>

    
  );
};

export default Home;