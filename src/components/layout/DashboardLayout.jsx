import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu, X, Home, Building, User, BarChart2, MessageCircle,
  PlusCircle, Settings, LogOut, ChevronRight
} from 'lucide-react';
import { BiLogOutCircle } from "react-icons/bi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { useAuth } from '../../contexts/AuthContext.jsx';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { userRole, logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getSidebarLinks = () => {
    const commonLinks = [
      { name: 'Dashboard', icon: <Home size={20} />, path: '/dashboard' },
      { name: 'Messages', icon: <MessageCircle size={20} />, path: '/dashboard/messages' },
      { name: 'Profile', icon: <User size={20} />, path: '/dashboard/profile' },
      { name: 'Settings', icon: <Settings size={20} />, path: '/dashboard/settings' },
    ];

    if (userRole === 'admin') {
      return [
        ...commonLinks,
        { name: 'Users', icon: <User size={20} />, path: '/dashboard/users' },
        { name: 'Properties', icon: <Building size={20} />, path: '/dashboard/properties' },
        { name: 'Analytics', icon: <BarChart2 size={20} />, path: '/dashboard/analytics' },
        { name: 'Add Property', icon: <PlusCircle size={20} />, path: '/dashboard/add-property' },
      ];
    } else if (userRole === 'agent') {
      return [
        ...commonLinks,
        { name: 'My Listings', icon: <Building size={20} />, path: '/dashboard/my-listings' },
        { name: 'Clients', icon: <User size={20} />, path: '/dashboard/clients' },
        { name: 'Appointments', icon: <BarChart2 size={20} />, path: '/dashboard/appointments' },
        { name: 'Add Property', icon: <PlusCircle size={20} />, path: '/dashboard/add-property' },
      ];
    } else if (userRole === 'landlord') {
      return [
        ...commonLinks,
        { name: 'My Properties', icon: <Building size={20} />, path: '/dashboard/my-properties' },
        { name: 'Tenants', icon: <User size={20} />, path: '/dashboard/tenants' },
        { name: 'Add Property', icon: <PlusCircle size={20} />, path: '/dashboard/add-property' },
      ];
    } else {
      return [
        ...commonLinks,
        { name: 'Saved Properties', icon: <Building size={20} />, path: '/dashboard/saved-properties' },
        { name: 'Appointments', icon: <BarChart2 size={20} />, path: '/dashboard/appointments' },
      ];
    }
  };

  const sidebarLinks = getSidebarLinks();

  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-tr from-gray-500 to-gray-500">
      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed inset-0 z-40 ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white border-r border-gray-200 shadow-lg">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <div className="flex items-center px-4 py-5 border-b">
            <MdOutlineRealEstateAgent className="h-7 w-7 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-800">EstatePro</span>
          </div>
          <nav className="mt-5 px-4 space-y-2">
            {sidebarLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition ${
                  location.pathname === link.path
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {link.icon}
                <span className="ml-3">{link.name}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center text-sm text-gray-700 hover:text-gray-900"
            >
              <LogOut className="h-5 w-5 mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:border-r md:border-gray-500 bg-slate-600 shadow-sm">
        <div className="flex items-center px-4 py-5 border-b">
          <MdOutlineRealEstateAgent className="h-7 w-7 text-gray-100" />
          <span className="ml-2 text-xl font-serif font-semibold text-gray-100">EstatePro</span>
        </div>
        <div className="flex items-center space-x-4 px-4 py-4 border-b">
          <div className="h-12 w-12 bg-zinc-300 rounded-3xl text-gray-700 flex items-center justify-center font-sans font-bold">
            {currentUser?.name?.charAt(0) || 'U'}
          </div>
          <div>
            <div className="text-lg  font-serif font-medium text-gray-200">{currentUser?.name || 'User'}</div>
            <div className="text-xs text-gray-200 capitalize">{userRole || 'User'}</div>
          </div>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {sidebarLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition ${
                location.pathname === link.path
                  ? 'bg-gray-700 text-gray-100'
                  : 'text-gray-200 hover:bg-gray-700'
              }`}
            >
              {link.icon}
              <span className="ml-3">{link.name}</span>
              {location.pathname === link.path && <ChevronRight className="ml-auto h-4 w-4 text-sky-50" />}
            </Link>
          ))}
        </nav>
        <div className="px-4 py-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center text-sm text-gray-200 hover:text-gray-400"
          >
            <BiLogOutCircle className="h-5 w-5 ml-5" /> Logout
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="md:hidden flex items-center justify-between p-4 border-b bg-white shadow-sm">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
          <div className="flex items-center">
            <MdOutlineRealEstateAgent className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-lg font-semibold text-gray-800">EstatePro</span>
          </div>
        </div>
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
