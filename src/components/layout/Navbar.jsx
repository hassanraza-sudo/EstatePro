import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Bell } from "lucide-react";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { useAuth } from "../../contexts/AuthContext.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [showNavbar, setShowNavbar] = useState(true);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      // Show navbar if scrolling up, hide if scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkBaseStyle = `px-3 py-2 rounded-md text-sm font-medium`;
  const linkActive = `font-semibold`;
  const linkLight = `text-white hover:text-gray-200`;
  const linkDark = `text-gray-700 hover:text-blue-600`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform ${
        isScrolled ? "bg-neutral-300 shadow-md" : "bg-slate-700"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <MdOutlineRealEstateAgent
              className={`w-full h-7 transition-transform duration-300 ${
                isScrolled ? "text-neutral-600" : "text-white"
              } group-hover:scale-110`}
            />
            <span
              className={`text-xl font-serif font-extrabold tracking-wide ${
                isScrolled ? "text-neutral-800" : "text-white"
              }`}
            >
              EstatePro
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              "/",
              "/properties",
              "/mortgage-calculator",
              "/about",
              "/contact",
            ].map((path, idx) => {
              const names = [
                "Home",
                "Properties",
                "Mortgage Calculator",
                "About",
                "Contact",
              ];
              return (
                <Link
                  key={path}
                  to={path}
                  className={`${linkBaseStyle} ${
                    isScrolled ? linkDark : linkLight
                  } ${location.pathname === path ? linkActive : ""}`}
                >
                  {names[idx]}
                </Link>
              );
            })}

            {isAuthenticated ? (
              <>
                {/* Notification Bell */}
                <button
                  className={`relative p-1 rounded-full ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  <Bell className="h-6 w-6" />
                  {notificationCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] bg-red-500 text-white font-bold flex items-center justify-center rounded-full">
                      {notificationCount}
                    </span>
                  )}
                </button>

                {/* Dashboard & Logout */}
                <Link
                  to="/dashboard"
                  className={`ml-4 ${linkBaseStyle} ${
                    isScrolled
                      ? "bg-blue-300 text-white"
                      : "bg-white text-blue-300"
                  } hover:opacity-90`}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className={`ml-2 ${linkBaseStyle} ${
                    isScrolled
                      ? "border border-gray-300 text-gray-700"
                      : "border border-white text-white"
                  } hover:opacity-80`}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`${linkBaseStyle} ${
                    isScrolled ? linkDark : linkLight
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`${linkBaseStyle} ${
                    isScrolled
                      ? "bg-slate-500 text-white"
                      : "bg-white text-blue-600"
                  } hover:opacity-90`}
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            {isAuthenticated && (
              <button
                className={`relative p-1 rounded-full ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                <Bell className="h-6 w-6" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] bg-red-500 text-white font-bold flex items-center justify-center rounded-full">
                    {notificationCount}
                  </span>
                )}
              </button>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`ml-3 p-2 rounded-md ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white hover:text-gray-200 hover:bg-gray-700"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-3 space-y-1">
            {[
              { to: "/", label: "Home" },
              { to: "/properties", label: "Properties" },
              { to: "/mortgage-calculator", label: "Mortgage Calculator" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-serif font-medium text-gray-700 hover:text-blue-300 hover:bg-gray-100"
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
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
