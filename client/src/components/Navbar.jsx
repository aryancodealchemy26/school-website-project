import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          S
        </div>
        <span className="text-xl font-bold text-gray-800 tracking-tight">
          SchoolPortal
        </span>
      </div>
      
      <div className="hidden md:flex gap-8 text-gray-600 font-medium">
        <a href="#" className="hover:text-blue-600 transition">Home</a>
        <a href="#" className="hover:text-blue-600 transition">About</a>
        <a href="#" className="hover:text-blue-600 transition">Admissions</a>
        <a href="#" className="hover:text-blue-600 transition">Contact</a>
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-md">
        Admin Login
      </button>
    </nav>
  );
};

export default Navbar;