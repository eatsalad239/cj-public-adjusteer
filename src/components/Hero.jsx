import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-cj-dark to-black min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-green-500/20 border border-green-500 text-green-400 px-4 py-2 rounded-full mb-6">
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold">Louisiana Act 144 Compliant - Licensed Public Adjusters</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Licensed Public <span className="gradient-text">Adjusters</span> in Louisiana
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              <span className="font-semibold">Contractors:</span> Need Act 144 compliant claims assistance? 
              Partner with licensed professionals. <br/><br/>
              <span className="font-semibold">Property Owners:</span> We advocate for fair insurance settlements 
              while you focus on recovery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contractor-partners" 
                className="btn-primary inline-flex items-center justify-center"
              >
                <span className="mr-2">🏗️</span> For Contractors
              </Link>
              <Link 
                to="/commercial-services" 
                className="btn-outline !border-white !text-white hover:!bg-white hover:!text-cj-dark inline-flex items-center justify-center"
              >
                <span className="mr-2">🏢</span> Commercial Claims
              </Link>
            </div>
            
            <div className="mt-8 flex items-center space-x-6 text-white">
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm">15+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm">500+ Claims Won</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm">24/7 Response</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Claim Assessment</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cj-red"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cj-red"
                />
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cj-red">
                  <option value="">Select Claim Type</option>
                  <option value="commercial">Commercial Property</option>
                  <option value="residential">Residential Property</option>
                  <option value="contractor">Contractor Partnership</option>
                  <option value="denied">Denied/Underpaid Claim</option>
                </select>
                <button type="submit" className="w-full btn-primary">
                  Get Free Consultation
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                By submitting, you agree to our privacy policy. We never share your information.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;