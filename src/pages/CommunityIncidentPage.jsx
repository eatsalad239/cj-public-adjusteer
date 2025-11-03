import React from 'react';
import {
  FireIcon,
  HomeIcon,
  DocumentCheckIcon,
  BeakerIcon,
  UsersIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

const CommunityIncidentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Incident Documentation
          </h1>
          <p className="text-xl text-gray-600">
            Free documentation for affected residents
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Schedule Your Free Property Documentation
          </h2>
          <form method="post" action="">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
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
                <label htmlFor="proximity" className="block text-sm font-medium text-gray-700 mb-2">
                  Proximity to Incident *
                </label>
                <select
                  id="proximity"
                  name="proximity"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Distance</option>
                  <option value="within_block">Within my block</option>
                  <option value="within_half_mile">Within 1/2 mile</option>
                  <option value="within_mile">Within 1 mile</option>
                  <option value="within_2_miles">Within 2 miles</option>
                </select>
              </div>
              <div>
                <label htmlFor="visibleResidue" className="block text-sm font-medium text-gray-700 mb-2">
                  Visible Residue on Property?
                </label>
                <select
                  id="visibleResidue"
                  name="visibleResidue"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">Not Sure</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="hvacSymptoms" className="block text-sm font-medium text-gray-700 mb-2">
                  HVAC System Symptoms
                </label>
                <textarea
                  id="hvacSymptoms"
                  name="hvacSymptoms"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Any unusual odors, sounds, or performance issues..."
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="photos" className="block text-sm font-medium text-gray-700 mb-2">
                  Have Photos/Videos?
                </label>
                <select
                  id="photos"
                  name="photos"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Option</option>
                  <option value="yes">Yes, I have documentation</option>
                  <option value="no">No, I need help documenting</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Any other details about potential impact or concerns..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="communityLeader"
                    value="yes"
                    className="mr-3 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I'm a civic leader interested in coordinating a neighborhood documentation day
                  </span>
                </label>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Documentation
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              No-cost inspection. You only pay if you file a claim and it's successfully resolved.
            </p>
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <FireIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Free Assessment</h3>
            <p className="text-gray-600">No cost for documentation</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <DocumentCheckIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Documentation</h3>
            <p className="text-gray-600">Professional photo and video evidence</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <UsersIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community Support</h3>
            <p className="text-gray-600">Helping neighbors together</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityIncidentPage;
