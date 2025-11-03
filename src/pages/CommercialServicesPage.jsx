import React from 'react';
import {
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  ClockIcon,
  DocumentCheckIcon,
  PhoneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const CommercialServicesPage = () => {
  const propertyTypes = [
    { icon: BuildingOfficeIcon, name: 'Office Building', value: 'office' },
    { icon: BuildingStorefrontIcon, name: 'Retail/Restaurant', value: 'retail' },
    { icon: HomeModernIcon, name: 'Multi-Family', value: 'multifamily' },
    { icon: WrenchScrewdriverIcon, name: 'Industrial/Warehouse', value: 'industrial' },
  ];

  const commercialClaims = [
    'Hurricane & Wind Damage',
    'Flood & Water Damage',
    'Fire & Smoke Damage',
    'Business Interruption',
    'Roof & Structural Damage',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Commercial Property Claims
          </h1>
          <p className="text-xl text-gray-600">
            Expert assistance for your commercial insurance claim
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Get Your Free Commercial Claim Evaluation
          </h2>
          <form method="post" action="">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
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
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Property Type</option>
                  <option value="office">Office Building</option>
                  <option value="retail">Retail/Restaurant</option>
                  <option value="multifamily">Multi-Family</option>
                  <option value="industrial">Industrial/Warehouse</option>
                </select>
              </div>
              <div>
                <label htmlFor="damageType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Damage *
                </label>
                <select
                  id="damageType"
                  name="damageType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Damage Type</option>
                  <option value="hurricane">Hurricane & Wind Damage</option>
                  <option value="flood">Flood & Water Damage</option>
                  <option value="fire">Fire & Smoke Damage</option>
                  <option value="business_interruption">Business Interruption</option>
                  <option value="roof">Roof & Structural Damage</option>
                </select>
              </div>
              <div>
                <label htmlFor="estimatedLoss" className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Loss
                </label>
                <select
                  id="estimatedLoss"
                  name="estimatedLoss"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Range</option>
                  <option value="under_50k">Under $50,000</option>
                  <option value="50k_100k">$50,000 - $100,000</option>
                  <option value="100k_500k">$100,000 - $500,000</option>
                  <option value="500k_1m">$500,000 - $1M</option>
                  <option value="over_1m">Over $1M</option>
                </select>
              </div>
              <div>
                <label htmlFor="insuranceCompany" className="block text-sm font-medium text-gray-700 mb-2">
                  Insurance Company
                </label>
                <input
                  type="text"
                  id="insuranceCompany"
                  name="insuranceCompany"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Name of your insurance carrier"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Tell us more about your claim or damage..."
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Commercial Claim Inquiry
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              All information is kept strictly confidential. We will contact you within 24-48 hours.
            </p>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Need immediate assistance?</p>
            <a
              href="tel:504-252-8204"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Now: (504) 252-8204
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <ChartBarIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Maximize Recovery</h3>
            <p className="text-gray-600">Get the full value of your claim</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <ClockIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
            <p className="text-gray-600">24-48 hour initial assessment</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <DocumentCheckIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Documentation</h3>
            <p className="text-gray-600">Professional claim preparation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialServicesPage;
