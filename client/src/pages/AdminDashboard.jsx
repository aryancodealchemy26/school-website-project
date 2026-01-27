import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import added

const AdminDashboard = () => {
  const [notice, setNotice] = useState({ title: '', content: '' });
  const [existingNotices, setExistingNotices] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Moved INSIDE the component

  // Security Check & Initial Fetch merged
  useEffect(() => {
    const auth = localStorage.getItem('isAdmin');
    if (auth !== 'true') {
      navigate('/admin-login'); // Kick out if not logged in
    } else {
      fetchNotices();
    }
  }, [navigate]);

  const fetchNotices = async () => {
  try {
    setLoading(true); // Start loading
    const res = await axios.get('http://localhost:5000/api/notices');
    setExistingNotices(res.data);
    setLoading(false); // Stop loading
  } catch (err) {
    setLoading(false);
    console.error("Error fetching notices");
  }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin'); // Clear the login flag
    navigate('/admin-login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/notices/${editId}`, notice);
        alert("Notice Updated!");
      } else {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this notice?")) {
      await axios.delete(`http://localhost:5000/api/notices/${id}`);
      fetchNotices();
    }
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-800">Admin Console</h1>
        <button 
          onClick={handleLogout}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Logout
        </button>
      </div>
      
      {/* Form and List continue as you wrote them... */}
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

      <div className="mt-12">
  <h2 className="text-2xl font-bold mb-4 text-gray-800">Manage Existing Notices</h2>
  
  {/* THIS IS THE WRAPPER DIV */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden border">
    
    {/* 1. If loading is true, show this message */}
    {loading ? (
      <div className="p-10 text-center text-blue-600 font-bold animate-pulse">
        <p className="text-lg">Fetching latest notices from database...</p>
      </div>
    ) : (
      /* 2. If loading is false, show the actual list */
      existingNotices.length > 0 ? (
        existingNotices.map((n) => (
          <div key={n._id} className="p-4 border-b flex justify-between items-center hover:bg-gray-50">
            <div>
              <p className="font-bold text-gray-800">{n.title}</p>
              <p className="text-xs text-gray-400">{new Date(n.date).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(n)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Edit</button>
              <button onClick={() => handleDelete(n._id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Delete</button>
            </div>
          </div>
        ))
      ) : (
        /* 3. If loading is false but database is empty */
        <p className="p-10 text-center text-gray-500">No notices found.</p>
      )
    )}
  </div>
</div>
    </div>
  );
};

export default AdminDashboard;