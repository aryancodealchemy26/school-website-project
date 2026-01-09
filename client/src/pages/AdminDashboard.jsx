import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [notice, setNotice] = useState({ title: '', content: '' });
  const [existingNotices, setExistingNotices] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Track mode
  const [editId, setEditId] = useState(null); // Track which one to fix

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    const res = await axios.get('http://localhost:5000/api/notices');
    setExistingNotices(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // UPDATE Logic
        await axios.put(`http://localhost:5000/api/notices/${editId}`, notice);
        alert("Notice Updated!");
      } else {
        // POST Logic
        await axios.post('http://localhost:5000/api/notices', notice);
        alert("Notice Published!");
      }
      setNotice({ title: '', content: '' });
      setIsEditing(false);
      fetchNotices();
    } catch (err) {
      alert("Error saving notice");
    }
  };

  const handleEdit = (n) => {
    setIsEditing(true);
    setEditId(n._id);
    setNotice({ title: n.title, content: n.content });
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll up to the form
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this notice?")) {
      await axios.delete(`http://localhost:5000/api/notices/${id}`);
      fetchNotices();
    }
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-blue-800 text-center">Admin Console</h1>
      
      {/* Dynamic Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md border mb-10">
        <h2 className="text-xl font-bold">{isEditing ? "📝 Edit Notice" : "📢 New Notice"}</h2>
        <input 
          className="w-full p-3 border rounded-lg focus:outline-blue-500"
          placeholder="Title"
          onChange={(e) => setNotice({...notice, title: e.target.value})}
          value={notice.title} required
        />
        <textarea 
          className="w-full p-3 border rounded-lg h-32 focus:outline-blue-500"
          placeholder="Description..."
          onChange={(e) => setNotice({...notice, content: e.target.value})}
          value={notice.content} required
        />
        <div className="flex gap-2">
          <button className={`flex-1 py-3 rounded-lg font-bold text-white transition ${isEditing ? 'bg-orange-500' : 'bg-blue-600'}`}>
            {isEditing ? "Update Now" : "Publish Now"}
          </button>
          {isEditing && (
            <button type="button" onClick={() => {setIsEditing(false); setNotice({title:'', content:''})}} className="bg-gray-400 px-6 rounded-lg text-white">Cancel</button>
          )}
        </div>
      </form>

      {/* List with Edit & Delete */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border">
        {existingNotices.map((n) => (
          <div key={n._id} className="p-4 border-b flex justify-between items-center hover:bg-gray-50">
            <div>
              <p className="font-bold">{n.title}</p>
              <p className="text-xs text-gray-500">{new Date(n.date).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(n)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">Edit</button>
              <button onClick={() => handleDelete(n._id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;