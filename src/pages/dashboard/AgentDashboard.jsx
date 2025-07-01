import React from 'react';
import { Home, MessageCircle, CalendarClock } from 'lucide-react';

function AgentDashboard() {
  const cards = [
    {
      title: 'My Listings',
      description: 'Manage your property listings',
      icon: <Home className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'Client Inquiries',
      description: 'View and respond to client messages',
      icon: <MessageCircle className="h-8 w-8 text-emerald-600" />,
    },
    {
      title: 'Appointments',
      description: 'Schedule and manage property viewings',
      icon: <CalendarClock className="h-8 w-8 text-rose-600" />,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-44 flex justify-center">Welcome, Agent 👨‍💼</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-300 border border-gray-100 rounded-2xl shadow hover:shadow-md transition-shadow duration-300 p-6"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="bg-gray-100 p-3 rounded-full">
                {card.icon}
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">{card.title}</h2>
            <p className="text-gray-600 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentDashboard;
