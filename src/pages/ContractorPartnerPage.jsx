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
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
import GHLWebhook from '../utils/GHLWebhook';
import api from '../utils/api';

const ContractorPartnerPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    contractorType: '',
    monthlyJobs: '',
    currentChallenge: '',
    preferredContact: 'phone',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Universal payload with all possible fields (blank-safe) and sourceForm
      const payload = {
        companyName: formData.companyName || '',
        contactName: formData.contactName || '',
        phone: formData.phone || '',
        email: formData.email || '',
        contractorType: formData.contractorType || '',
        monthlyJobs: formData.monthlyJobs || '',
        currentChallenge: formData.currentChallenge || '',
        preferredContact: formData.preferredContact || '',
        firstName: '',
        lastName: '',
        address: '',
        preferredAppointmentTime: '',
        claimDetails: '',
        source: 'website_partner_application',
        type: 'partner_application',
        sourceForm: 'partner_application_form',
      };

      // Send to internal API and GHL using the universal payload
      await api.partnerApplication(payload);
      await GHLWebhook.sendPartnerApplication(payload);

      toast.success('Application submitted! We\'ll get back to you soon.');
      setFormData({
        companyName: '',
        contactName: '',
        phone: '',
        email: '',
        contractorType: '',
        monthlyJobs: '',
        currentChallenge: '',
        preferredContact: 'phone',
      });
    } catch (err) {
      console.error('Partner application error:', err);
      toast.error('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Contractor Partner Application</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input
              className="input-field"
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
            <input
              className="input-field"
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              className="input-field"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              className="input-field"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contractor Type</label>
            <select
              className="input-field"
              name="contractorType"
              value={formData.contractorType}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option value="roofing">Roofing</option>
              <option value="general">General Contractor</option>
              <option value="restoration">Restoration Company</option>
              <option value="siding">Siding/Exterior</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Average Monthly Jobs</label>
            <select
              className="input-field"
              name="monthlyJobs"
              value={formData.monthlyJobs}
              onChange={handleChange}
            >
              <option value="">Select Range</option>
              <option value="1-5">1-5 jobs</option>
              <option value="6-10">6-10 jobs</option>
              <option value="11-20">11-20 jobs</option>
              <option value="20+">20+ jobs</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Biggest Challenge with Act 144</label>
            <textarea
              className="input-field"
              rows={3}
              name="currentChallenge"
              value={formData.currentChallenge}
              onChange={handleChange}
              placeholder="Tell us how Act 144 is affecting your business..."
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === 'phone'}
                  onChange={handleChange}
                />
                <span className="ml-2">Phone</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === 'email'}
                  onChange={handleChange}
                />
                <span className="ml-2">Email</span>
              </label>
            </div>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContractorPartnerPage;
