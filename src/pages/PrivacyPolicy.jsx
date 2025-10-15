import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            CJ Claim Services respects your privacy and is committed to protecting your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact information (name, email, phone number, address)</li>
            <li>Property information related to insurance claims</li>
            <li>Insurance policy details</li>
            <li>Business information for commercial clients and partners</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide public adjusting services</li>
            <li>To communicate about your claim</li>
            <li>To comply with legal requirements</li>
            <li>To improve our services</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing</h2>
          <p className="mb-4">
            We do not sell or rent your personal information. We may share information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Insurance companies (as required for claim processing)</li>
            <li>Legal authorities (when required by law)</li>
            <li>Service providers (who assist in our operations)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your information from unauthorized access, 
            alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            For questions about this privacy policy:<br />
            Email: info@cjclaimservices.com<br />
            Phone: (504) 252-8204
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;