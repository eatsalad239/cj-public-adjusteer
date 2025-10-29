// Go High Level Webhook Integration - ENABLED
class GHLWebhook {
  // Use environment variable or construct from tracking ID
  static getWebhookUrl() {
    // Check for environment variable first
    if (import.meta.env.VITE_GHL_WEBHOOK_URL) {
      return import.meta.env.VITE_GHL_WEBHOOK_URL;
    }
    
    // Use the tracking ID from index.html
    const trackingId = 'tk_fabd83c40369425fb0f506a742ccab43';
    
    // Go High Level API endpoint for external tracking
    return `https://services.leadconnectorhq.com/hooks/form-submit/${trackingId}`;
  }

  static async send(data) {
    try {
      const webhookUrl = this.getWebhookUrl();
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status}`);
      }

      const result = await response.json();
      console.log('Webhook sent successfully:', result);
      return result;
    } catch (error) {
      console.error('Webhook error:', error);
      throw error;
    }
  }

  static async sendLead(formData) {
    const payload = {
      type: 'lead',
      contact: {
        firstName: formData.firstName || formData.first_name,
        lastName: formData.lastName || formData.last_name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      },
      source: formData.source || 'website_contact_form',
      formType: formData.type || 'contact_form',
      timestamp: new Date().toISOString(),
      customFields: formData
    };

    console.log('Sending lead to GHL:', payload);
    return await this.send(payload);
  }

  static async sendPartnerApplication(formData) {
    const payload = {
      type: 'partner_application',
      contact: {
        firstName: formData.contactName ? formData.contactName.split(' ')[0] : '',
        lastName: formData.contactName ? formData.contactName.split(' ').slice(1).join(' ') : '',
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName,
      },
      source: 'contractor_partner_form',
      formType: 'partner_application',
      timestamp: new Date().toISOString(),
      customFields: formData
    };

    console.log('Sending partner application to GHL:', payload);
    return await this.send(payload);
  }

  static async sendAppointment(appointmentData) {
    const payload = {
      type: 'appointment',
      contact: {
        firstName: appointmentData.name ? appointmentData.name.split(' ')[0] : '',
        lastName: appointmentData.name ? appointmentData.name.split(' ').slice(1).join(' ') : '',
        email: appointmentData.email,
        phone: appointmentData.phone,
      },
      appointment: {
        date: appointmentData.date || appointmentData.preferredDate,
        time: appointmentData.time || appointmentData.preferredTime,
        type: appointmentData.type || appointmentData.consultationType,
        notes: appointmentData.notes
      },
      source: 'appointment_booking',
      formType: 'appointment',
      timestamp: new Date().toISOString(),
      customFields: appointmentData
    };

    console.log('Sending appointment to GHL:', payload);
    return await this.send(payload);
  }

  static async trackFormAbandonment(formId, fieldReached) {
    const payload = {
      type: 'form_abandonment',
      formId,
      fieldReached,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    console.log('Tracking form abandonment:', payload);
    return await this.send(payload);
  }

  static async trackEngagement(action, details) {
    const payload = {
      type: 'engagement',
      action,
      details,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    console.log('Tracking engagement:', payload);
    return await this.send(payload);
  }
}

// Track session start
if (typeof window !== 'undefined') {
  window.sessionStart = Date.now();
}

export default GHLWebhook;