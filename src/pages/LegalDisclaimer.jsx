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

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Professional Services Disclaimer</h2>
          <p className="mb-4">
            CJ Claim Services provides licensed public adjusting services only. We do not provide legal, 
            accounting, or contracting services. The content on this website is for informational purposes 
            and does not constitute legal advice. For legal questions, please consult with a qualified attorney.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Act 144 Compliance</h2>
          <p className="mb-4">
            CJ Claim Services operates in full compliance with Louisiana Act 144 (formerly House Bill 121), 
            effective August 1, 2025. We are licensed public adjusters authorized to handle insurance claims 
            on behalf of policyholders. We do not engage in any activities prohibited by Act 144.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Claims Handling Disclosure</h2>
          <p className="mb-4">
            CJ Claim Services works exclusively on behalf of policyholders, not insurance companies. While we 
            advocate professionally for fair settlements, outcomes depend on policy terms, coverage limits, and 
            documented damages. We operate on a contingency fee basis as permitted by Louisiana law.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Professional Relationships</h2>
          <p className="mb-4">
            CJ Claim Services maintains professional relationships with contractors in accordance with Louisiana 
            Department of Insurance regulations. All parties must operate independently within their licensed 
            scope of practice. We do not pay referral fees to unlicensed individuals or entities. All operations 
            comply with Louisiana insurance laws and regulations.
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