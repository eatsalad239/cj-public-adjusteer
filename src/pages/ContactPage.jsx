import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 text-center">
            Contact CJ Claim Services
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Louisiana's Trusted Public Adjusters - Here to Help 24/7
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <PhoneIcon className="h-12 w-12 text-cj-red mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a href="tel:504-252-8204" className="text-cj-red font-semibold hover:text-cj-dark">
                (504) 252-8204
              </a>
              <p className="text-sm text-gray-500 mt-2">24/7 Emergency Response Available</p>
            </div>

            <div className="card">
              <EnvelopeIcon className="h-12 w-12 text-cj-red mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get a response within 24 hours</p>
              <a href="mailto:info@cjclaimservices.com" className="text-cj-red font-semibold hover:text-cj-dark">
                info@cjclaimservices.com
              </a>
            </div>

            <div className="card">
              <MapPinIcon className="h-12 w-12 text-cj-red mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                Serving all of Louisiana<br />
                New Orleans Metropolitan Area<br />
                Baton Rouge • Lafayette • Lake Charles
              </p>
            </div>

            <div className="card">
              <ClockIcon className="h-12 w-12 text-cj-red mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Emergency Calls Only
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/book-appointment" className="btn-primary">
              Schedule a Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;