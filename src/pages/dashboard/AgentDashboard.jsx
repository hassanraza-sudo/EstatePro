import React from 'react';

function AgentDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Agent Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">My Listings</h2>
          <p className="text-gray-600">Manage your property listings</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Client Inquiries</h2>
          <p className="text-gray-600">View and respond to client messages</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Appointments</h2>
          <p className="text-gray-600">Schedule and manage property viewings</p>
        </div>
      </div>
    </div>
  );
}

export default AgentDashboard;