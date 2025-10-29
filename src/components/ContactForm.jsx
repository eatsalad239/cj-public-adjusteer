import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Small delay to ensure GHL captures the submit
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you! Your information has been submitted.'
      });
      
      // Clear form after 2 seconds
      setTimeout(() => {
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          address: ''
        });
        setStatus({ type: '', message: '' });
      }, 2000);
      
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {status.message && (
        <div className={`mb-4 p-4 rounded-lg ${
          status.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {status.message}
        </div>
      )}

      {/* CRITICAL: must be a <form> tag real, not div */}
      <form 
        name="Contact Form CJ Claim Services"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label 
              htmlFor="first_name" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name *
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="John"
            />
          </div>

          {/* Last Name */}
          <div>
            <label 
              htmlFor="last_name" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email - REQUIRED for GHL */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="john.doe@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label 
            htmlFor="phone" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Address */}
        <div>
          <label 
            htmlFor="address" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Property Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="123 Main St, New Orleans, LA 70112"
          />
        </div>

        {/* Submit Button - must be type="submit" */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            'Submit Request'
          )}
        </button>
      </form>
    </div>
  );
}
