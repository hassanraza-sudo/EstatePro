import React from 'react';

function LandlordDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Landlord Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">My Properties</h2>
          <p className="text-gray-600">View and manage your properties</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tenant Management</h2>
          <p className="text-gray-600">Oversee tenant information and leases</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Maintenance Requests</h2>
          <p className="text-gray-600">Handle property maintenance issues</p>
        </div>
      </div>
    </div>
  );
}

export default LandlordDashboard;