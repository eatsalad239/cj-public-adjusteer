// Go High Level API Integration (Direct Contact Creation)
class GHLWebhook {
  static async send(data) {
    try {
      const apiKey = import.meta.env.VITE_GHL_API_KEY;
      const locationId = import.meta.env.VITE_GHL_LOCATION_ID;

      if (!apiKey || !locationId) {
        console.warn('GHL API credentials not configured');
        console.log('API Key exists:', !!apiKey);
        console.log('Location ID exists:', !!locationId);
        return false;
      }

      console.log('Creating contact in GHL...', data);

      const response = await fetch(`https://services.leadconnectorhq.com/contacts/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28'
        },
        body: JSON.stringify({
          locationId: locationId,
          ...data
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('GHL API error:', response.status, errorText);
        return false;
      }

      const result = await response.json();
      console.log('GHL contact created successfully:', result);
      return true;
    } catch (error) {
      console.error('GHL API error:', error);
      return false;
    }
  }

  static async sendLead(formData) {
    const fullName = `${formData.firstName || ''} ${formData.lastName || ''}`.trim();
    
    return this.send({
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      name: fullName,
      email: formData.email || '',
      phone: formData.phone || '',
      address1: formData.address || '',
      companyName: formData.companyName || '',
      source: formData.sourceForm || 'website_contact_form',
      tags: ['website_lead', formData.type || 'contact_form'],
      customFields: [
        { key: 'license_number', value: formData.licenseNumber || '' },
        { key: 'preferred_appointment_time', value: formData.preferredAppointmentTime || '' },
        { key: 'claim_details', value: formData.claimDetails || '' }
      ]
    });
  }

  static async sendPartnerApplication(formData) {
    return this.send({
      firstName: formData.contactName ? formData.contactName.split(' ')[0] : '',
      lastName: formData.contactName ? formData.contactName.split(' ').slice(1).join(' ') : '',
      name: formData.contactName || '',
      email: formData.email || '',
      phone: formData.phone || '',
      companyName: formData.companyName || '',
      source: 'partner_application',
      tags: ['partner_application', 'contractor', formData.contractorType || ''],
      customFields: [
        { key: 'contractor_type', value: formData.contractorType || '' },
        { key: 'monthly_jobs', value: formData.monthlyJobs || '' },
        { key: 'current_challenge', value: formData.currentChallenge || '' },
        { key: 'preferred_contact', value: formData.preferredContact || '' }
      ]
    });
  }

  static async sendAppointment(appointmentData) {
    return this.send({
      firstName: appointmentData.name ? appointmentData.name.split(' ')[0] : '',
      lastName: appointmentData.name ? appointmentData.name.split(' ').slice(1).join(' ') : '',
      name: appointmentData.name || '',
      email: appointmentData.email || '',
      phone: appointmentData.phone || '',
      companyName: appointmentData.company || '',
      source: 'appointment_booking',
      tags: ['appointment', appointmentData.type || ''],
      customFields: [
        { key: 'appointment_date', value: appointmentData.date || '' },
        { key: 'appointment_time', value: appointmentData.time || '' },
        { key: 'consultation_type', value: appointmentData.consultationType || '' },
        { key: 'appointment_notes', value: appointmentData.notes || '' }
      ]
    });
  }

  static async trackFormAbandonment(formId, fieldReached) {
    console.log('Form abandonment:', formId, fieldReached);
    return true;
  }

  static async trackEngagement(action, details) {
    console.log('User engagement:', action, details);
    return true;
  }
}

export default GHLWebhook;
