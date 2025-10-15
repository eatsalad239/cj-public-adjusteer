import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Act144Banner = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center">
              <ExclamationTriangleIcon className="h-6 w-6 mr-3 animate-pulse" />
              <div>
                <p className="font-bold text-lg">
                  Important: Louisiana Act 144 is Now in Effect
                </p>
                <p className="text-sm mt-1">
                  Roofers and contractors can no longer handle insurance claims. 
                  {!isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="ml-2 underline hover:no-underline"
                    >
                      Learn more
                    </button>
                  )}
                </p>
              </div>
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pl-9"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-bold mb-2 flex items-center">
                      <InformationCircleIcon className="h-5 w-5 mr-2" />
                      What Act 144 Means for You:
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span><strong>Contractors:</strong> Cannot handle, advertise, or solicit insurance claims</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span><strong>Property Owners:</strong> Must work with licensed public adjusters for claims assistance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span><strong>Solution:</strong> CJ Claim Services is fully licensed and Act 144 compliant</span>
                      </li>
                    </ul>
                    <div className="mt-4 flex gap-4">
                      <Link 
                        to="/contractor-partners" 
                        className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Contractor Solutions
                      </Link>
                      <Link 
                        to="/act-144-resources" 
                        className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                      >
                        Full Act 144 Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            className="ml-4 p-1 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close banner"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Act144Banner;