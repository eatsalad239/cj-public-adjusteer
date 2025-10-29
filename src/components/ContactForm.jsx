import { useState } from 'react';
import { toast } from 'react-hot-toast';
import GHLWebhook from '../utils/GHLWebhook';

export default function ContactForm() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send to GHL webhook with all form data
      await GHLWebhook.sendLead({
        firstName: formData.first_name,
        lastName: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        type: 'contact_form',
        source: 'website_contact_form'
      });
      
      setStatus({
        type: 'success',
        message: 'Thank you! We\'ll contact you within 24 hours for your free claim review.'
      });
      
      toast.success('Form submitted successfully! We\'ll be in touch soon.');
      
      // Reset form
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to submit form. Please call us directly at (504) 252-8204.'
      });
      toast.error('Failed to submit form. Please try again or call us directly.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get Your Free Claim Review
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Let us help you get the compensation you deserve
          </p>

          {status.message && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                status.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {status.message}
            </div>
          )}

          <form
            className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Property Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Free Claim Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}