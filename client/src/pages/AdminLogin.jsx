import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', credentials);
      if (res.data.success) {
        localStorage.setItem('isAdmin', 'true'); // Save login status
        navigate('/admin-dashboard');
      }
    } catch (err) {
      alert("Wrong username or password!");
    }
  };

  return (
  /* Changed min-h-screen to min-h-[80vh] so it doesn't conflict with Navbar/Footer */
  <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4">
    <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Admin Access</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input 
          type="text" 
          placeholder="Username" 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
          value={credentials.username}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          value={credentials.password}
          required
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-md">
          Login to Dashboard
        </button>
      </form>
    </div>
  </div>
);
};

export default AdminLogin;