import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">S</div>
            <span className="font-bold text-xl text-gray-800 tracking-tight">SchoolPortal</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link 
              to="/admin-login" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-md"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;