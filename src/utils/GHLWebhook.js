// Go High Level Webhook Integration
class GHLWebhook {
  static async send(data) {
    try {
      const webhookUrl = window.GHL_WEBHOOK_URL || import.meta.env.VITE_GHL_WEBHOOK_URL;
      const locationId = window.GHL_LOCATION_ID || import.meta.env.VITE_GHL_LOCATION_ID;

      if (!webhookUrl) {
        console.warn('GHL Webhook URL not configured');
        return false;
      }

      const payload = {
        ...data,
        location_id: locationId,
        timestamp: new Date().toISOString(),
        source: 'website',
        user_agent: navigator.userAgent,
        page_url: window.location.href,
      };

      console.log('Sending to GHL:', payload); // Debug log

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error('GHL Response error:', response.status, response.statusText);
        return false;
      }

      console.log('GHL webhook success');
      return true;
    } catch (error) {
      console.error('GHL Webhook error:', error);
      return false;
    }
  }

  static async sendLead(formData) {
    // Construct full name from firstName and lastName
    const fullName = `${formData.firstName || ''} ${formData.lastName || ''}`.trim();
    
    return this.send({
      event: 'new_lead',
      lead_type: formData.type || 'general',
      // Send data in flat structure for easier GHL mapping
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      name: fullName,
      email: formData.email || '',
      phone: formData.phone || '',
      address: formData.address || '',
      company: formData.companyName || '',
      licenseNumber: formData.licenseNumber || '',
      preferredAppointmentTime: formData.preferredAppointmentTime || '',
      claimDetails: formData.claimDetails || '',
      sourceForm: formData.sourceForm || 'contact_form',
      tags: ['website_lead', formData.type || 'general'],
    });
  }

  static async sendPartnerApplication(formData) {
    return this.send({
      event: 'partner_application',
      application_type: 'contractor_partner',
      companyName: formData.companyName,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      contractorType: formData.contractorType,
      monthlyJobs: formData.monthlyJobs,
      currentChallenge: formData.currentChallenge,
      preferredContact: formData.preferredContact,
      tags: ['partner_application', 'contractor', formData.contractorType],
      priority: 'high',
    });
  }

  static async sendAppointment(appointmentData) {
    return this.send({
      event: 'appointment_booked',
      appointment_type: appointmentData.type,
      name: appointmentData.name,
      email: appointmentData.email,
      phone: appointmentData.phone,
      company: appointmentData.company,
      appointmentDate: appointmentData.date,
      appointmentTime: appointmentData.time,
      consultationType: appointmentData.consultationType,
      notes: appointmentData.notes,
      tags: ['appointment', appointmentData.type],
    });
  }

  static async trackFormAbandonment(formId, fieldReached) {
    return this.send({
      event: 'form_abandonment',
      form_id: formId,
      last_field: fieldReached,
      abandonment_time: new Date().toISOString(),
    });
  }

  static async trackEngagement(action, details) {
    return this.send({
      event: 'user_engagement',
      action,
      details,
      session_duration: Math.floor((Date.now() - (window.sessionStart || Date.now())) / 1000),
    });
  }
}

// Track session start
if (typeof window !== 'undefined') {
  window.sessionStart = window.sessionStart || Date.now();
}

export default GHLWebhook;
