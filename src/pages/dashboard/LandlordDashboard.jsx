import React from 'react';
import { LandPlot , Users, Wrench } from 'lucide-react';

function LandlordDashboard() {
  const cards = [
    {
      title: 'My Properties',
      description: 'View and manage your properties',
      icon: <LandPlot className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'Tenant Management',
      description: 'Oversee tenant information and leases',
      icon: <Users className="h-8 w-8 text-teal-600" />,
    },
    {
      title: 'Maintenance Requests',
      description: 'Handle property maintenance issues',
      icon: <Wrench className="h-8 w-8 text-rose-600" />,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl flex justify-center font-bold text-gray-900 mb-48">Welcome, Landlord 👋</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-400 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gray-100 p-3 rounded-full">{card.icon}</div>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">{card.title}</h2>
            <p className="text-gray-900 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandlordDashboard;
