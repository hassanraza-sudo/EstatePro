import React from 'react';

function BuyerDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Buyer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Saved Properties</h2>
          <p className="text-gray-600">View your favorited listings</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Property Alerts</h2>
          <p className="text-gray-600">Manage your search notifications</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Viewing Schedule</h2>
          <p className="text-gray-600">Track your upcoming property viewings</p>
        </div>
      </div>
    </div>
  );
}

export default BuyerDashboard;