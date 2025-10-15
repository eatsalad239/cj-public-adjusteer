import React from 'react';

const LegalDisclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Legal Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">General Information</h2>
          <p className="mb-4">
            The information provided on this website is for general informational purposes only. 
            CJ Claim Services is a licensed public adjusting firm operating in compliance with all 
            Louisiana state laws and regulations, including Act 144.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No Legal Advice</h2>
          <p className="mb-4">
            The content on this website does not constitute legal advice. For specific legal questions 
            regarding insurance claims or Act 144 compliance, please consult with a qualified attorney.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Act 144 Compliance</h2>
          <p className="mb-4">
            CJ Claim Services operates in full compliance with Louisiana Act 144 (formerly House Bill 121), 
            effective August 1, 2025. We are licensed public adjusters authorized to handle insurance claims 
            on behalf of policyholders. We do not engage in any activities prohibited by Act 144.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No Guarantee of Results</h2>
          <p className="mb-4">
            While we work diligently to maximize claim settlements for our clients, we cannot guarantee 
            specific outcomes. Each claim is unique and subject to the terms of the insurance policy and 
            applicable laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contractor Partnerships</h2>
          <p className="mb-4">
            Our contractor partnership program is designed to ensure full compliance with Act 144. 
            Contractors participating in our program must adhere to all applicable laws and regulations. 
            Referral fees are paid in accordance with Louisiana law.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
          <p className="mb-4">
            If you have any questions about this disclaimer or our services, please contact us at:<br />
            Phone: 504-555-0100<br />
            Email: info@cjclaimservices.com
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimer;