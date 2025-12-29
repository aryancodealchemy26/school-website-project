// const Login = () => (
//   <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 w-96">
//     <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
//     <input type="text" placeholder="Username" className="w-full p-2 mb-4 border rounded" />
//     <input type="password" placeholder="Password" className="w-full p-2 mb-6 border rounded" />
//     <button className="w-full bg-blue-600 text-white py-2 rounded font-bold">Sign In</button>
//   </div>
// );
// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // This helps us redirect after success

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sending the login request to our Backend server
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        email,
        password
      });

      if (response.status === 200) {
        alert("Login successful! Welcome Admin.");
        // Save the admin ID so the app remembers we are logged in
        localStorage.setItem('adminId', response.data.admin.id);
        navigate('/admin-dashboard'); // Redirect to Admin Dashboard
      }
    } catch (err) {
      // If the email or password is wrong, show the error message from the server
      alert(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 w-96">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600 font-sans">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4 font-sans">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded focus:outline-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="admin@school.com"
          />
        </div>
        <div className="mb-6 font-sans">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input 
            type="password" 
            className="w-full p-2 border rounded focus:outline-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition shadow-md">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;