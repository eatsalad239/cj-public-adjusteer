import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FireIcon,
  HomeIcon,
  DocumentCheckIcon,
  BeakerIcon,
  UsersIcon,
  CameraIcon
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
import api from '../utils/api';

const CommunityIncidentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    proximity: '',
    visibleResidue: '',
    hvacSymptoms: '',
    photos: '',
    communityLeader: false,
    notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // You would implement the API call here
      toast.success('Documentation request submitted. We\'ll contact you within 24 hours.');
      setFormData({
        name: '', address: '', phone: '', email: '',
        proximity: '', visibleResidue: '', hvacSymptoms: '',
        photos: '', communityLeader: false, notes: ''
      });
    } catch (error) {
      toast.error('Failed to submit request. Please call us directly.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-cj-dark to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-amber-500/20 border border-amber-500 text-amber-400 px-4 py-2 rounded-full mb-6">
              <FireIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold">Community Impact Response</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Community Impact: Understanding Soot and Residue After the <span className="gradient-text">Roseland Industrial Fire</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every property is unique. Wind, distance, and building systems affect residue. 
              Only independent testing and thorough documentation confirm conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              No-Cost Property Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No-cost inspection includes: surface swabs, photo logs, HVAC return checks, 
              and guidance on independent Industrial Hygienist testing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HomeIcon,
                title: 'For Residents',
                description: 'Request inspection to document potential impacts from the incident.',
                cta: 'Request Inspection'
              },
              {
                icon: UsersIcon,
                title: 'For Civic Leaders',
                description: 'Coordinate a neighborhood documentation day for affected areas.',
                cta: 'Coordinate Documentation'
              },
              {
                icon: DocumentCheckIcon,
                title: 'For City Sites',
                description: 'Organized intake, evidence packs, and claim presentation support.',
                cta: 'City Coordination'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <item.icon className="h-16 w-16 text-cj-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button 
                  onClick={() => document.getElementById('incident-form').scrollIntoView({ behavior: 'smooth' })}
                  className="text-cj-red font-semibold hover:text-cj-dark"
                >
                  {item.cta} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">
            What We Document
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CameraIcon, title: 'Photo Logs', desc: 'Comprehensive visual documentation' },
              { icon: BeakerIcon, title: 'Surface Testing', desc: 'Swab samples and residue checks' },
              { icon: HomeIcon, title: 'HVAC Returns', desc: 'System and filter inspection' },
              { icon: DocumentCheckIcon, title: 'Testing Guidance', desc: 'Independent hygienist referrals' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <item.icon className="h-10 w-10 text-cj-red mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section id="incident-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Schedule Documentation
              </h2>
              <p className="text-xl text-gray-600">
                Impact varies by location and conditions. We can document your property 
                and, if appropriate, guide independent testing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="input-field"
                    placeholder="Full address of affected property"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proximity to Incident
                  </label>
                  <select
                    value={formData.proximity}
                    onChange={(e) => setFormData({...formData, proximity: e.target.value})}
                    className="input-field"
                  >
                    <option value="">Select Distance</option>
                    <option value="less-1-mile">Less than 1 mile</option>
                    <option value="1-3-miles">1-3 miles</option>
                    <option value="3-5-miles">3-5 miles</option>
                    <option value="over-5-miles">Over 5 miles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Visible Residue?
                  </label>
                  <select
                    value={formData.visibleResidue}
                    onChange={(e) => setFormData({...formData, visibleResidue: e.target.value})}
                    className="input-field"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes - Visible residue present</option>
                    <option value="no">No - No visible residue</option>
                    <option value="unsure">Unsure - Need inspection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    HVAC Symptoms?
                  </label>
                  <select
                    value={formData.hvacSymptoms}
                    onChange={(e) => setFormData({...formData, hvacSymptoms: e.target.value})}
                    className="input-field"
                  >
                    <option value="">Select</option>
                    <option value="odor">Unusual odor from vents</option>
                    <option value="residue">Residue on filters/vents</option>
                    <option value="both">Both odor and residue</option>
                    <option value="none">No symptoms</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows="4"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="input-field"
                    placeholder="Any other details about potential impact or concerns..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.communityLeader}
                      onChange={(e) => setFormData({...formData, communityLeader: e.target.checked})}
                      className="mr-3"
                    />
                    <span className="text-sm text-gray-700">
                      I'm a civic leader interested in coordinating a neighborhood documentation day
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <button type="submit" className="w-full btn-primary">
                  Schedule Documentation
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                No-cost inspection. You only pay if you file a claim and it's successfully resolved.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-amber-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700">
            <strong>Important:</strong> If it isn't documented, it didn't happen. 
            Evidence first. Then repairs. Independent testing answers the 'am I safe?' question.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CommunityIncidentPage;