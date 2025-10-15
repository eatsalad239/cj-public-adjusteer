import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  XCircleIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  PhoneIcon,
  ArrowRightIcon,
  LightBulbIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
import GHLWebhook from '../utils/GHLWebhook';

const ContractorPartnerPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    contractorType: '',
    monthlyJobs: '',
    currentChallenge: '',
    preferredContact: 'phone'
  });

  const beforeAct144 = [
    'Handle insurance claims directly',
    'Advertise insurance claim services',
    'Use contingency contracts',
    'Act as insurance adjusters',
    'Interpret insurance policies',
    'Solicit insurance work',
  ];

  const afterAct144 = [
    'Must focus on retail pricing only',
    'Cannot mention insurance to customers',
    'Risk heavy fines for violations',
    'Losing insurance-based revenue',
    'Customers confused about process',
    'Competition getting harder',
  ];

  const partnerBenefits = [
    {
      icon: CurrencyDollarIcon,
      title: 'Referral Commissions',
      description: 'Earn generous referral fees for every client you send our way. Average commission: $500-2,500 per successful claim.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Stay 100% Compliant',
      description: 'No risk of Act 144 violations. We handle all insurance aspects legally while you focus on construction.',
    },
    {
      icon: UserGroupIcon,
      title: 'Keep Your Customers',
      description: 'Don\'t lose clients to competitors. We handle their claims, you get the repair contract.',
    },
    {
      icon: DocumentTextIcon,
      title: 'Co-Marketing Support',
      description: 'Joint marketing materials, co-branded content, and educational resources for your customers.',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await GHLWebhook.sendPartnerApplication(formData);
      toast.success('Partnership application submitted! We\'ll contact you within 24 hours.');
      setFormData({
        companyName: '',
        contactName: '',
        phone: '',
        email: '',
        contractorType: '',
        monthlyJobs: '',
        currentChallenge: '',
        preferredContact: 'phone'
      });
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cj-dark to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500 text-yellow-400 px-4 py-2 rounded-full mb-6">
              <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold">Act 144 Compliance Solution for Contractors</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Turn Act 144 Into Your <span className="gradient-text">Competitive Advantage</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              While other contractors struggle with the new laws, partner with CJ Claim Services 
              to legally handle insurance claims and keep your revenue flowing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#apply" className="btn-primary">
                Become a Partner
              </a>
              <a href="tel:504-555-0100" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-cj-dark inline-flex items-center justify-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Speak to Partnership Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before vs After Act 144 */}
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
              The Game Has Changed for Louisiana Contractors
            </h2>
            <p className="text-xl text-gray-600">
              Act 144 (effective August 2025) completely transformed how roofing contractors operate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card border-2 border-red-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <XCircleIcon className="h-8 w-8 text-red-500 mr-3" />
                Before Act 144 (What You Can't Do Now)
              </h3>
              <ul className="space-y-3">
                {beforeAct144.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 line-through">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card border-2 border-green-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircleIcon className="h-8 w-8 text-green-500 mr-3" />
                The CJ Partnership Solution
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">We handle all insurance claims legally</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">You get the repair contract</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Earn referral commissions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Stay 100% Act 144 compliant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Keep your insurance-based revenue</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Get priority treatment for your referrals</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Partner Benefits That Drive Revenue
            </h2>
            <p className="text-xl text-gray-600">
              Join Louisiana's fastest-growing contractor partnership network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start">
                  <benefit.icon className="h-12 w-12 text-cj-red flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Apply for Partnership
              </h2>
              <p className="text-xl text-gray-600">
                Takes less than 2 minutes. Get approved within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
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
                    Contractor Type *
                  </label>
                  <select
                    required
                    value={formData.contractorType}
                    onChange={(e) => setFormData({...formData, contractorType: e.target.value})}
                    className="input-field"
                  >
                    <option value="">Select Type</option>
                    <option value="roofing">Roofing Contractor</option>
                    <option value="general">General Contractor</option>
                    <option value="restoration">Restoration Company</option>
                    <option value="siding">Siding/Exterior</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Monthly Jobs
                  </label>
                  <select
                    value={formData.monthlyJobs}
                    onChange={(e) => setFormData({...formData, monthlyJobs: e.target.value})}
                    className="input-field"
                  >
                    <option value="">Select Range</option>
                    <option value="1-5">1-5 jobs</option>
                    <option value="6-10">6-10 jobs</option>
                    <option value="11-20">11-20 jobs</option>
                    <option value="20+">20+ jobs</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Biggest Challenge with Act 144
                  </label>
                  <textarea
                    rows="3"
                    value={formData.currentChallenge}
                    onChange={(e) => setFormData({...formData, currentChallenge: e.target.value})}
                    className="input-field"
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
                        name="contact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="mr-2"
                      />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contact"
                        value="text"
                        checked={formData.preferredContact === 'text'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="mr-2"
                      />
                      Text
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button type="submit" className="w-full btn-primary">
                  Submit Partnership Application
                  <ArrowRightIcon className="h-5 w-5 ml-2 inline" />
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting this form, you agree to our partnership terms and conditions. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cj-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LightBulbIcon className="h-16 w-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Don't Let Act 144 Kill Your Business
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 50+ Louisiana contractors who are thriving with our partnership program. 
              Keep your insurance-based revenue flowing legally and ethically.
            </p>
            <a 
              href="tel:504-555-0100" 
              className="bg-white text-cj-red px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Partnership Team: 504-555-0100
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContractorPartnerPage;