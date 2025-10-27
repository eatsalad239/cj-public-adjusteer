import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import GHLTracker from './GHLTracker';
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
      <GHLTracker />
      
      {/* Top Bar */}
      <div className="bg-cj-dark text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="tel:504-252-8204" className="flex items-center hover:text-gray-300">
                <PhoneIcon className="h-4 w-4 mr-1" />
                <span>(504) 252-8204</span>
              </a>
              <a href="mailto:info@cjclaimsolutions.com" className="flex items-center hover:text-gray-300">
                <EnvelopeIcon className="h-4 w-4 mr-1" />
                <span>info@cjclaimsolutions.com</span>
              </a>
            </div>
            <div>
              <a href="/book-appointment" className="hover:text-gray-300">24/7 Emergency Response</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />
            
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
                        ? 'bg-cj-primary text-white hover:bg-cj-secondary'
                        : item.highlight
                        ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                        : isActive(item.href)
                        ? 'text-cj-primary'
                        : 'text-gray-700 hover:text-cj-primary'
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-cj-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      block px-4 py-3 rounded-md text-base font-medium
                      ${
                        item.cta
                          ? 'bg-cj-primary text-white hover:bg-cj-secondary'
                          : item.highlight
                          ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                          : isActive(item.href)
                          ? 'bg-gray-100 text-cj-primary'
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

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-cj-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Logo isDark />
              <p className="mt-4 text-gray-300">
                Louisiana's trusted public adjuster since 2009. We fight for maximum insurance settlements.
              </p>
              <div className="mt-6 space-y-2">
                <a href="tel:504-252-8204" className="flex items-center hover:text-gray-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  (504) 252-8204
                </a>
                <a href="mailto:info@cjclaimsolutions.com" className="flex items-center hover:text-gray-300">
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  info@cjclaimsolutions.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.slice(0, 5).map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>New Orleans Metro</li>
                <li>Baton Rouge</li>
                <li>Lafayette</li>
                <li>All of Louisiana</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CJ Claim Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Layout;
