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
    
    {/* Ticker Section - Only shows if notices exist */}
    {notices.length > 0 && (
      <div className="w-full bg-blue-900 text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee hover:pause cursor-pointer">
          {notices.map((n) => (
            <span key={n._id} className="mx-10 font-medium italic inline-block">
              📢 {n.title}: {n.content.substring(0, 50)}...
            </span>
          ))}
          {/* Clone for continuous loop */}
          {notices.map((n) => (
            <span key={`${n._id}-clone`} className="mx-10 font-medium italic inline-block">
              📢 {n.title}: {n.content.substring(0, 50)}...
            </span>
          ))}
        </div>
      </div>
    )}

    {/* Main Content Section */}
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Latest Announcements</h1>
      <div className="max-w-4xl mx-auto space-y-4">
        {notices.length > 0 ? (
          notices.map((n) => (
            <div key={n._id} className="p-4 border-l-4 border-blue-600 bg-gray-50 shadow-sm rounded-r-md">
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