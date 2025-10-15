import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import { toast } from 'react-hot-toast';
import GHLWebhook from '../utils/GHLWebhook';

const CommercialServicesPage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    propertyType: '',
    damageType: '',
    estimatedLoss: '',
    insuranceCompany: '',
    claimStatus: '',
    notes: ''
  });

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
    'Mold & Environmental',
    'Vandalism & Theft',
    'Equipment Breakdown',
  ];

  const stats = [
    { value: '$25M+', label: 'Commercial Claims Recovered' },
    { value: '200+', label: 'Business Clients Served' },
    { value: '48hr', label: 'Average Response Time' },
    { value: '45%', label: 'Higher Than Initial Offers' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await GHLWebhook.sendLead({
        ...formData,
        type: 'commercial_claim'
      });
      toast.success('Commercial claim inquiry submitted! We\'ll contact you within 24 hours.');
      // Reset form
      setFormData({
        businessName: '',
        contactName: '',
        phone: '',
        email: '',
        propertyType: '',
        damageType: '',
        estimatedLoss: '',
        insuranceCompany: '',
        claimStatus: '',
        notes: ''
      });
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again or call us directly.');
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Commercial Property <span className="gradient-text">Claims Experts</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protecting Louisiana businesses with expert commercial insurance claim representation. 
              We understand the complexities of commercial claims and fight for maximum settlements.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="text-3xl font-bold text-cj-red">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Types Section */}
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
              We Handle All Commercial Property Types
            </h2>
            <p className="text-xl text-gray-600">
              From small retail shops to large industrial complexes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-xl transition-shadow"
              >
                <type.icon className="h-16 w-16 text-cj-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{type.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Claims We Handle */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Commercial Claims We Handle
            </h2>
            <p className="text-xl text-gray-600">
              Expert representation for all types of commercial property damage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {commercialClaims.map((claim, index) => (
              <motion.div
                key={claim}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center bg-white rounded-lg p-4 shadow-md"
              >
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{claim}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Commercial Claims Process
            </h2>
            <p className="text-xl text-gray-600">
              Fast, professional, and thorough - designed for minimal business disruption
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Emergency Response',
                description: 'We respond within 48 hours to document damage and start your claim process immediately.',
                icon: ClockIcon,
              },
              {
                step: '2',
                title: 'Thorough Documentation',
                description: 'Complete documentation of all damages, business interruption losses, and additional expenses.',
                icon: DocumentCheckIcon,
              },
              {
                step: '3',
                title: 'Maximum Settlement',
                description: 'Expert negotiation with your insurance company to secure the highest possible settlement.',
                icon: ChartBarIcon,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="card">
                  <div className="absolute -top-4 left-6 bg-cj-red text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <item.icon className="h-12 w-12 text-cj-red mb-4 mt-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Start Your Commercial Claim
              </h2>
              <p className="text-xl text-gray-600">
                Get expert help with your commercial property insurance claim
              </p>
            </div>

            <form onSubmit={handleSubmit} className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
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
                    Email Address *
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
                    Property Type *
                  </label>
                  <select
                    required
                    value={formData.propertyType}
                    onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                    className="input-field"
                  >
                    <option value="">Select Type</option>
                    <option value="office">Office Building</option>
                    <option value="retail">Retail/Restaurant</option>
                    <option value="multifamily">Multi-Family</option>
                    <option value="industrial">Industrial/Warehouse</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Damage *
                  </label>
                  <select
                    required
                    value={formData.damageType}
                    onChange={(e) => setFormData({...formData, damageType: e.target.value})}
                    className="input-field"
                  >
                    <option value="">Select Damage Type</option>
                    <option value="hurricane">Hurricane/Wind</option>
                    <option value="flood">Flood/Water</option>
                    <option value="fire">Fire/Smoke</option>
                    <option value="business_interruption">Business Interruption</option>
                    <option value="roof">Roof/Structural</option>
                    <option value="mold">Mold/Environmental</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Loss
                  </label>
                  <select
                    value={formData.estimatedLoss}
                    onChange={(e) => setFormData({...formData, estimatedLoss: e.target.value})}
                    className="input-field"
                  >
                    <option value="">Select Range</option>
                    <option value="under_50k">Under $50,000</option>
                    <option value="50k_100k">$50,000 - $100,000</option>
                    <option value="100k_250k">$100,000 - $250,000</option>
                    <option value="250k_500k">$250,000 - $500,000</option>
                    <option value="500k_1m">$500,000 - $1M</option>
                    <option value="over_1m">Over $1M</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Claim Status
                  </label>
                  <select
                    value={formData.claimStatus}
                    onChange={(e) => setFormData({...formData, claimStatus: e.target.value})}
                    className="input-field"
                  >
                    <option value="">Select Status</option>
                    <option value="not_filed">Not Filed Yet</option>
                    <option value="filed_pending">Filed - Pending</option>
                    <option value="denied">Denied</option>
                    <option value="underpaid">Underpaid</option>
                    <option value="disputed">In Dispute</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Insurance Company
                  </label>
                  <input
                    type="text"
                    value={formData.insuranceCompany}
                    onChange={(e) => setFormData({...formData, insuranceCompany: e.target.value})}
                    className="input-field"
                    placeholder="Name of your insurance carrier"
                  />
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
                    placeholder="Tell us more about your claim or damage..."
                  />
                </div>
              </div>

              <div className="mt-8">
                <button type="submit" className="w-full btn-primary">
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
                href="tel:504-555-0100" 
                className="btn-outline inline-flex items-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Now: 504-555-0100
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommercialServicesPage;