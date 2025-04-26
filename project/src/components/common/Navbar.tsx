import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/book" className="flex items-center" onClick={closeMenu}>
              <Calendar className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Gatherly</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/book" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/book') 
                      ? 'text-purple-700 bg-purple-50' 
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                  onClick={closeMenu}
                >
                  Book Event
                </Link>
                <Link 
                  to="/dashboard" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/dashboard') 
                      ? 'text-purple-700 bg-purple-50' 
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors ml-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {isAuthenticated ? (
            <>
              <Link 
                to="/book" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/book') 
                    ? 'text-purple-700 bg-purple-50' 
                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                }`}
                onClick={closeMenu}
              >
                Book Event
              </Link>
              <Link 
                to="/dashboard" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/dashboard') 
                    ? 'text-purple-700 bg-purple-50' 
                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                }`}
                onClick={closeMenu}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium text-purple-600 hover:text-purple-700 transition-colors"
                onClick={closeMenu}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;