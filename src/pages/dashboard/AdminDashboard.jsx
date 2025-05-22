import React from 'react';

function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Properties Overview</h2>
          <p className="text-gray-600">Manage and monitor all property listings</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">User Management</h2>
          <p className="text-gray-600">Oversee user accounts and permissions</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Analytics</h2>
          <p className="text-gray-600">View site statistics and performance metrics</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;