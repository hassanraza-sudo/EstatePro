import React from "react";
import {
  Heart,
  Bell,
  CalendarClock,
} from "lucide-react";

const features = [
  {
    title: "Saved Properties",
    description: "View and manage your favorited listings.",
    icon: <Heart className="h-8 w-8 text-blue-600" />,
    bg: "bg-blue-50",
  },
  {
    title: "Property Alerts",
    description: "Customize your notifications for new listings.",
    icon: <Bell className="h-8 w-8 text-green-600" />,
    bg: "bg-green-50",
  },
  {
    title: "Viewing Schedule",
    description: "Track upcoming property viewings and meetings.",
    icon: <CalendarClock className="h-8 w-8 text-purple-600" />,
    bg: "bg-purple-50",
  },
];

function BuyerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white py-10 px-5 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-sans font-extrabold text-gray-900 text-center mb-20">
        Buyer Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md hover:shadow-xl transition bg-zinc-300 p-6 border border-gray-200`}
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full ${feature.bg} mb-4`}
            >
              {feature.icon}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h2>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerDashboard;
