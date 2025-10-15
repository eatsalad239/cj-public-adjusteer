import React from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const PartnerPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
            Partner Portal
          </h1>
          <div className="card max-w-2xl mx-auto">
            <UserGroupIcon className="h-16 w-16 text-cj-red mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Coming Soon
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Our partner portal is being developed to provide you with:
            </p>
            <ul className="space-y-2 text-gray-600 mb-8">
              <li className="flex items-center">
                <ChartBarIcon className="h-5 w-5 text-cj-red mr-3" />
                Track customer claim status
              </li>
              <li className="flex items-center">
                <CurrencyDollarIcon className="h-5 w-5 text-cj-red mr-3" />
                Access educational resources
              </li>
            </ul>
            <a href="/contractor-partners" className="btn-primary w-full text-center">
              Apply for Partnership
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerPortal;