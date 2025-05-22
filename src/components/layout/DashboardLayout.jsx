import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, X, Home, Building, User, BarChart2, MessageCircle, 
  PlusCircle, Settings, LogOut, ChevronDown, ChevronRight, Bell 
} from 'lucide-react';
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

  // Define sidebar links based on user role
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
      // Buyer/Tenant
      return [
        ...commonLinks,
        { name: 'Saved Properties', icon: <Building size={20} />, path: '/dashboard/saved-properties' },
        { name: 'Appointments', icon: <BarChart2 size={20} />, path: '/dashboard/appointments' },
      ];
    }
  };
  
  const sidebarLinks = getSidebarLinks();

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`md:hidden fixed inset-0 flex z-40 ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <Building className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EstatePro</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.icon}
                  <span className="ml-3">{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button 
              onClick={handleLogout}
              className="flex-shrink-0 group block w-full flex items-center"
            >
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                    Logout
                  </p>
                </div>
                <LogOut className="ml-auto h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-white border-r border-gray-200">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Building className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">EstatePro</span>
              </div>
              <div className="flex-shrink-0 px-4 py-4 flex items-center">
                <div className="flex-shrink-0">
                  <span className="inline-flex h-10 w-10 rounded-full bg-blue-600 items-center justify-center text-white font-bold">
                    {currentUser?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {currentUser?.name || 'User'}
                  </p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700 capitalize">
                    {userRole || 'User'}
                  </p>
                </div>
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`${
                      location.pathname === link.path
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <div className="mr-3 text-gray-400 group-hover:text-gray-500">
                      {link.icon}
                    </div>
                    {link.name}
                    {location.pathname === link.path ? (
                      <ChevronRight className="ml-auto h-5 w-5" />
                    ) : null}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <button 
                onClick={handleLogout}
                className="flex items-center w-full"
              >
                <LogOut className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 flex items-center">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          <div className="ml-4 flex items-center">
            <Building className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EstatePro</span>
          </div>
        </div>
        
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;