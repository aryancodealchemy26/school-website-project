import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">SchoolPortal</h3>
          <p className="text-gray-400">Empowering students with modern education and digital excellence.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Academic Calendar</li>
            <li>Student Portal</li>
            <li>Parent Dashboard</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
          <p className="text-gray-400 text-sm">123 Education Lane, Learning City</p>
          <p className="text-gray-400 text-sm">support@school.com</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-xs">
        © 2025 SchoolPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;