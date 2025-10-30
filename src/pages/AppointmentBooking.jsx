import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
import GHLWebhook from '../utils/GHLWebhook';
import api from '../utils/api';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name || '',
        email: formData.email || '',
        phone: formData.phone || '',
        company: formData.company || '',
        consultationType: formData.consultationType || '',
        preferredDate: formData.preferredDate || '',
        preferredTime: formData.preferredTime || '',
        notes: formData.notes || '',
        firstName: '',
        lastName: '',
        address: '',
        companyName: '',
        licenseNumber: '',
        claimDetails: '',
        source: 'website_appointment',
        type: 'appointment',
        sourceForm: 'appointment_form',
      };

      await Promise.all([
        api.appointment(payload),
        GHLWebhook.sendAppointment(payload),
      ]);

      toast.success("Appointment request submitted! We'll confirm within 24 hours.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        consultationType: '',
        preferredDate: '',
        preferredTime: '',
        notes: ''
      });
    } catch (error) {
      toast.error('Failed to submit appointment. Please call us directly.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 text-center">Book Your Consultation</h1>
          <p className="text-xl text-gray-600 text-center mb-12">Schedule a free consultation with our expert public adjusters</p>
          <form className="card" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type *</label>
                <select name="consultationType" required value={formData.consultationType} onChange={handleChange} className="input-field">
                  <option value="">Select Type</option>
                  <option value="commercial">Commercial Property Claim</option>
                  <option value="residential">Residential Property Claim</option>
                  <option value="contractor">Contractor Partnership</option>
                  <option value="denied">Denied/Underpaid Claim</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="input-field" min={new Date().toISOString().split('T')[0]} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <div className="grid grid-cols-3 gap-4">
                  {['Morning (9-12)', 'Afternoon (12-4)', 'Evening (4-6)'].map(time => (
                    <label className="flex items-center" key={time}>
                      <input type="radio" name="preferredTime" value={time} checked={formData.preferredTime === time} onChange={handleChange} className="mr-2" />
                      {time}
                    </label>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea name="notes" rows={4} value={formData.notes} onChange={handleChange} className="input-field" placeholder="Tell us about your situation or any specific questions..." />
              </div>
            </div>
            <div className="mt-8">
              <button className="w-full btn-primary" type="submit">
                <CalendarIcon className="h-5 w-5 mr-2 inline" />
                Schedule Consultation
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Prefer to call?</p>
            <a className="btn-outline inline-flex items-center" href="tel:504-252-8204">
              <PhoneIcon className="h-5 w-5 mr-2" />
              (504) 252-8204
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
