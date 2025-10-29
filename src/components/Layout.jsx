import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import Chatbot from './Chatbot';

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Contractor Partners', href: '/contractor-partners', highlight: true },
    { name: 'Commercial Services', href: '/commercial-services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Partner Portal', href: '/partner-portal' },
    { name: 'Act 144 Info', href: '/act-144-resources' },
    { name: 'Book Consultation', href: '/book-appointment', cta: true },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <div className="min-h-screen bg-gray-50">
      <Chatbot />
      
      {/* Top Bar */}
      <div className="bg-cj-dark text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="tel:504-252-8204" className="flex items-center hover:text-gray-300">
                <PhoneIcon className="h-4 w-4 mr-1" />
                504-252-8204
              </a>
              <a href="mailto:info@cjclaimservices.com" className="flex items-center hover:text-gray-300">
                <EnvelopeIcon className="h-4 w-4 mr-1" />
                info@cjclaimservices.com
              </a>
            </div>
            <div className="text-xs">
              Licensed Louisiana Public Adjuster | Act 144 Compliance
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <Logo className="h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium transition-colors
                    ${
                      item.cta
                        ? 'bg-cj-red text-white hover:bg-red-700'
                        : item.highlight
                        ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        : isActive(item.href)
                        ? 'bg-gray-100 text-cj-dark'
                        : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      block px-3 py-2 rounded-md text-base font-medium
                      ${
                        item.cta
                          ? 'bg-cj-red text-white hover:bg-red-700'
                          : item.highlight
                          ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                          : isActive(item.href)
                          ? 'bg-gray-100 text-cj-dark'
                          : 'text-gray-700 hover:bg-gray-50'
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-cj-dark text-white mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CJ Claim Services</h3>
              <p className="text-gray-300">
                Licensed Louisiana Public Adjuster serving homeowners and businesses
                throughout the state.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="tel:504-252-8204" className="text-gray-300 hover:text-white block">
                  Phone: 504-252-8204
                </a>
                <a href="mailto:info@cjclaimservices.com" className="text-gray-300 hover:text-white block">
                  Email: info@cjclaimservices.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <p className="text-gray-300">
                Licensed by the Louisiana Department of Insurance
              </p>
              <p className="text-gray-300 mt-2">
                Act 144 Compliant
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} CJ Claim Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
