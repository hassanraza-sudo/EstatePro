import React from 'react';
import { BarChart2, Users, Building2 } from 'lucide-react';

function AdminDashboard() {
  const cards = [
    {
      title: 'Properties Overview',
      description: 'Manage and monitor all property listings',
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'User Management',
      description: 'Oversee user accounts and permissions',
      icon: <Users className="h-8 w-8 text-green-600" />,
    },
    {
      title: 'Analytics',
      description: 'View site statistics and performance metrics',
      icon: <BarChart2 className="h-8 w-8 text-purple-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold flex justify-center text-gray-800 mb-44 tracking-tight">Admin Dashboard 🛠️</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-zinc-300 border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
            >
              <div className="flex justify-center items-center mb-5">
                <div className="bg-gradient-to-tr from-gray-100 to-gray-200 p-4 rounded-full group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
              </div>
              <h2 className="text-xl font-semibold text-center text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {card.title}
              </h2>
              <p className="text-gray-600 text-center text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
