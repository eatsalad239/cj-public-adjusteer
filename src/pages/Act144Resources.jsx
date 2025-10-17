import React from 'react';
import { motion } from 'framer-motion';
import { DocumentTextIcon, ExclamationTriangleIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const Act144Resources = () => {
  const prohibitions = [
    'Handling insurance claims - Cannot act as insurance adjusters',
    'Offering claims assistance - Cannot advertise or solicit insurance claim services',
    'Using contingency contracts - Contracts cannot be contingent on insurance payouts',
    'Providing estimates without itemized costs - Must provide detailed cost breakdowns',
    'Interpreting insurance policies for homeowners',
    'Negotiating directly with insurance companies on behalf of homeowners'
  ];

  const solutions = [
    'Partner with licensed public adjusters like CJ Claim Services',
    'Focus on retail pricing and direct-to-consumer sales',
    'Refer insurance claims to qualified professionals',
    'Provide clear, itemized estimates for all work',
    'Educate customers about their rights under Act 144',
    'Maintain compliance to avoid hefty fines and penalties'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Louisiana Act 144 Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything contractors and property owners need to know about the new insurance laws
              effective August 1, 2025
            </p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-12">
            <div className="flex items-start">
              <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Important Legal Notice
                </h2>
                <p className="text-gray-700">
                  Act 144 (formerly House Bill 121) fundamentally changes how roofing contractors 
                  can operate in Louisiana. Violations can result in significant fines, license 
                  suspension, and legal action. CJ Claim Services is fully licensed and compliant 
                  to handle all insurance claim matters legally.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card border-2 border-red-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <XCircleIcon className="h-8 w-8 text-red-500 mr-3" />
                What Contractors Can\'t Do
              </h3>
              <ul className="space-y-3">
                {prohibitions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card border-2 border-green-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircleIcon className="h-8 w-8 text-green-500 mr-3" />
                Compliant Solutions
              </h3>
              <ul className="space-y-3">
                {solutions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="card bg-cj-red text-white">
            <h3 className="text-2xl font-bold mb-4">How CJ Claim Services Helps</h3>
            <p className="mb-6">
              As licensed public adjusters, we are legally authorized to handle all aspects of 
              insurance claims. We provide a compliant solution for contractors and property owners:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">For Contractors:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Professional partnership program</li>
                  <li>• We handle claims, you handle repairs</li>
                  <li>• Keep your customer relationships</li>
                  <li>• Stay 100% Act 144 compliant</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">For Property Owners:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Professional claim assistance</li>
                  <li>• Work toward fair settlements</li>
                  <li>• Handle all insurance claim documentation</li>
                  <li>• Full regulatory compliance</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href="/contractor-partners" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-cj-red text-center">
                Contractor Partnership Info
              </a>
              <a href="/book-appointment" className="bg-white text-cj-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 text-center">
                Schedule Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Act144Resources;