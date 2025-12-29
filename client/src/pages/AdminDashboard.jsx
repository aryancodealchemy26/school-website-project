import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Control Panel</h1>
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          Logged In
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="font-bold text-blue-600 text-lg">Manage Students</h3>
          <p className="text-sm text-gray-500 mt-2">View, add, or remove student records from the database.</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="font-bold text-green-600 text-lg">Announcements</h3>
          <p className="text-sm text-gray-500 mt-2">Post new updates for students and teachers to see.</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="font-bold text-purple-600 text-lg">Attendance</h3>
          <p className="text-sm text-gray-500 mt-2">Review daily attendance logs and reports.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;