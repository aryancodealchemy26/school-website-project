import React, { useState, useEffect } from 'react'; // Added useEffect
import axios from 'axios';

const AdminDashboard = () => {
  const [notice, setNotice] = useState({ title: '', content: '', category: 'News' });
  const [existingNotices, setExistingNotices] = useState([]); // Defined missing state

  // Fetch notices so we can manage them
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/notices');
        setExistingNotices(res.data);
      } catch (err) {
        console.error("Error fetching notices", err);
      }
    };
    fetchNotices();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/notices', notice);
      alert("Notice Live on Website!");
      setExistingNotices([res.data, ...existingNotices]); // Add new notice to list immediately
      setNotice({ title: '', content: '', category: 'News' }); 
    } catch (err) {
      alert("Failed to post: " + (err.response?.data?.error || err.message));
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this notice?")) {
      try {
        await axios.delete(`http://localhost:5000/api/notices/${id}`);
        setExistingNotices(existingNotices.filter(n => n._id !== id));
        alert("Notice Deleted!");
      } catch (err) {
        alert("Error deleting notice");
      }
    }
  };

  return (
    <div className="p-10 max-w-4xl mx-auto"> {/* Increased width for better layout */}
      <h1 className="text-2xl font-bold mb-6 text-blue-800 text-center">Admin Console</h1>
      
      {/* POST FORM */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Post New Announcement</h2>
        <form onSubmit={handlePost} className="space-y-4 bg-white p-6 rounded-xl shadow-md border">
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

      {/* MANAGE SECTION (Now inside the return block) */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Manage Existing Notices</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden border">
          {existingNotices.length > 0 ? (
            existingNotices.map((n) => (
              <div key={n._id} className="p-4 border-b flex justify-between items-center hover:bg-gray-50">
                <div>
                  <p className="font-bold text-gray-800">{n.title}</p>
                  <p className="text-xs text-gray-500">{new Date(n.date).toLocaleDateString()}</p>
                </div>
                <button 
                  onClick={() => handleDelete(n._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 transition text-sm"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="p-4 text-center text-gray-500">No notices found in database.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;