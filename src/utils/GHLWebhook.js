// Go High Level Webhook Integration
class GHLWebhook {
  static async send(data) {
    try {
      const webhookUrl = window.GHL_WEBHOOK_URL || process.env.REACT_APP_GHL_WEBHOOK_URL;
      const locationId = window.GHL_LOCATION_ID || process.env.REACT_APP_GHL_LOCATION_ID;

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

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      return response.ok;
    } catch (error) {
      console.error('GHL Webhook error:', error);
      return false;
    }
  }

  static async sendLead(formData) {
    return this.send({
      event: 'new_lead',
      lead_type: formData.type || 'general',
      contact: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
      },
      details: formData,
      tags: ['website_lead', formData.type],
    });
  }

  static async sendPartnerApplication(formData) {
    return this.send({
      event: 'partner_application',
      application_type: 'contractor_partner',
      contact: {
        company_name: formData.companyName,
        contact_name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
      },
      details: {
        contractor_type: formData.contractorType,
        monthly_jobs: formData.monthlyJobs,
        current_challenge: formData.currentChallenge,
        preferred_contact: formData.preferredContact,
      },
      tags: ['partner_application', 'contractor', formData.contractorType],
      priority: 'high',
    });
  }

  static async sendAppointment(appointmentData) {
    return this.send({
      event: 'appointment_booked',
      appointment_type: appointmentData.type,
      contact: {
        name: appointmentData.name,
        email: appointmentData.email,
        phone: appointmentData.phone,
        company: appointmentData.company,
      },
      appointment: {
        date: appointmentData.date,
        time: appointmentData.time,
        type: appointmentData.consultationType,
        notes: appointmentData.notes,
      },
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
      session_duration: Math.floor((Date.now() - window.sessionStart) / 1000),
    });
  }
}

// Track session start
if (typeof window !== 'undefined') {
  window.sessionStart = Date.now();
}

export default GHLWebhook;