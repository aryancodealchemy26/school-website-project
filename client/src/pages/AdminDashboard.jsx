import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [notice, setNotice] = useState({ title: '', content: '', category: 'News' });

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/notices', notice);
      alert("Notice Live on Website!");
      setNotice({ title: '', content: '', category: 'News' }); // Clear form
    } catch (err) {
      alert("Failed to post notice.");
    }
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">Post New Announcement</h1>
      <form onSubmit={handlePost} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
        <input 
          className="w-full p-3 border rounded-lg focus:outline-blue-500"
          placeholder="Notice Title"
          onChange={(e) => setNotice({...notice, title: e.target.value})}
          value={notice.title} required
        />
        <textarea 
          className="w-full p-3 border rounded-lg h-32 focus:outline-blue-500"
          placeholder="Notice Description..."
          onChange={(e) => setNotice({...notice, content: e.target.value})}
          value={notice.content} required
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          Publish to Home Page
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;