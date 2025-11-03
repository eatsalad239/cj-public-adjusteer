import React from 'react';
import {
  CheckCircleIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  PhoneIcon,
  ArrowRightIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const ContractorPartnerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Partner with CJ Public Adjusters
          </h1>
          <p className="text-xl text-gray-600">
            Join our network of trusted contractors
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contractor Partnership Application
          </h2>
          <form method="post" action="">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="contractorType" className="block text-sm font-medium text-gray-700 mb-2">
                  Contractor Type *
                </label>
                <select
                  id="contractorType"
                  name="contractorType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Type</option>
                  <option value="roofing">Roofing</option>
                  <option value="restoration">Restoration</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="general">General Contractor</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="monthlyJobs" className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Job Capacity
                </label>
                <input
                  type="number"
                  id="monthlyJobs"
                  name="monthlyJobs"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="currentChallenge" className="block text-sm font-medium text-gray-700 mb-2">
                  Biggest Challenge with Act 144
                </label>
                <textarea
                  id="currentChallenge"
                  name="currentChallenge"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Tell us how Act 144 is affecting your business..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      defaultChecked
                      className="mr-2"
                    />
                    <span>Phone</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      className="mr-2"
                    />
                    <span>Email</span>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <CurrencyDollarIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Higher Payouts</h3>
            <p className="text-gray-600">Get paid what your work is worth</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <UserGroupIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Leads</h3>
            <p className="text-gray-600">Work with vetted clients</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <ShieldCheckIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Support</h3>
            <p className="text-gray-600">We handle the claims process</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorPartnerPage;
