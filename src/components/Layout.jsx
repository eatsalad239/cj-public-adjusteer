import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import GHLTracker from './GHLTracker';

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
              <a href="mailto:info@cjclaimservices.com" className="hidden sm:flex items-center hover:text-gray-300">
                <EnvelopeIcon className="h-4 w-4 mr-1" />
                <span>info@cjclaimservices.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="badge-new">Act 144 Compliant</span>
              <span className="text-xs">Licensed Public Adjusters</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    ${isActive(item.href) ? 'text-cj-red border-b-2 border-cj-red' : 'text-gray-700 hover:text-cj-red'}
                    ${item.highlight ? 'relative' : ''}
                    ${item.cta ? 'btn-primary !py-2 !px-4' : 'px-1 py-2 font-medium text-sm transition-colors'}
                  `}
                >
                  {item.highlight && !isActive(item.href) && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      NEW
                    </span>
                  )}
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-cj-red p-2"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
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
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      block px-3 py-2 rounded-md text-base font-medium
                      ${isActive(item.href) 
                        ? 'bg-cj-red text-white' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-cj-red'
                      }
                      ${item.cta ? 'btn-primary text-center mt-2' : ''}
                    `}
                  >
                    {item.name}
                    {item.highlight && !isActive(item.href) && (
                      <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
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
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Logo dark />
              <p className="mt-4 text-gray-400 text-sm">
                Louisiana's trusted licensed public adjusters. We help property owners and contractors 
                navigate insurance claims professionally and ethically, ensuring fair settlements 
                while maintaining full compliance with Act 144.
              </p>
              <div className="mt-6 flex space-x-4">
                <span className="bg-cj-red text-white px-3 py-1 rounded text-xs">Licensed & Insured</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded text-xs">Act 144 Compliant</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/contractor-partners" className="hover:text-white">For Contractors</Link></li>
                <li><Link to="/commercial-services" className="hover:text-white">Commercial Claims</Link></li>
                <li><Link to="/act-144-resources" className="hover:text-white">Act 144 Info</Link></li>
                <li><Link to="/partner-portal" className="hover:text-white">Partner Portal</Link></li>
                <li><Link to="/book-appointment" className="hover:text-white">Schedule Consultation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  <a href="tel:504-252-8204" className="hover:text-white">(504) 252-8204</a>
                </li>
                <li className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  <a href="mailto:info@cjclaimservices.com" className="hover:text-white">info@cjclaimservices.com</a>
                </li>
                <li className="mt-4">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>24/7 Emergency Response Available</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024 CJ Claim Services. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link to="/legal-disclaimer" className="hover:text-white">Legal Disclaimer</Link>
                <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong>Important Disclaimer:</strong> CJ Claim Services is a Louisiana-licensed public adjuster firm. 
                We assist policyholders with claim documentation, presentation, and communications. 
                We do not provide legal advice or negotiate on behalf of clients. 
                For legal questions, consult an attorney.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;