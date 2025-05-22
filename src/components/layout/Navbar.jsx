import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, Home, Search, Building, Calculator, MessageCircle, Bell } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const { isAuthenticated, userRole, logout, currentUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Building className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`ml-2 font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                EstatePro
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'} ${location.pathname === '/' ? 'font-semibold' : ''}`}>
              Home
            </Link>
            <Link to="/properties" className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'} ${location.pathname === '/properties' ? 'font-semibold' : ''}`}>
              Properties
            </Link>
            <Link to="/mortgage-calculator" className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'} ${location.pathname === '/mortgage-calculator' ? 'font-semibold' : ''}`}>
              Mortgage Calculator
            </Link>
            <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'} ${location.pathname === '/about' ? 'font-semibold' : ''}`}>
              About
            </Link>
            <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'} ${location.pathname === '/contact' ? 'font-semibold' : ''}`}>
              Contact
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="relative">
                  <button className={`relative p-1 rounded-full ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'}`}>
                    <Bell className="h-6 w-6" />
                    {notificationCount > 0 && (
                      <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                        {notificationCount}
                      </span>
                    )}
                  </button>
                </div>
                <div className="relative ml-3 flex items-center">
                  <Link to="/dashboard" className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} hover:opacity-90`}>
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className={`ml-2 px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'border border-gray-300 text-gray-700' : 'border border-white text-white'} hover:opacity-80`}
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'}`}>
                  Login
                </Link>
                <Link to="/register" className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} hover:opacity-90`}>
                  Register
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            {isAuthenticated && (
              <div className="relative mr-2">
                <button className={`relative p-1 rounded-full ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                  <Bell className="h-6 w-6" />
                  {notificationCount > 0 && (
                    <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </button>
              </div>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' : 'text-white hover:text-gray-200 hover:bg-gray-700'}`}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/mortgage-calculator" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Mortgage Calculator
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;