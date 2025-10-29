// Webhook integration removed
class GHLWebhook {
  static async send(data) {
    console.log('Webhook integration disabled');
    return true;
  }

  static async sendLead(formData) {
    console.log('Lead submission (webhook disabled):', formData);
    return true;
  }

  static async sendPartnerApplication(formData) {
    console.log('Partner application (webhook disabled):', formData);
    return true;
  }

  static async sendAppointment(appointmentData) {
    console.log('Appointment booking (webhook disabled):', appointmentData);
    return true;
  }

  static async trackFormAbandonment(formId, fieldReached) {
    console.log('Form abandonment tracking (webhook disabled)');
    return true;
  }

  static async trackEngagement(action, details) {
    console.log('Engagement tracking (webhook disabled):', action, details);
    return true;
  }
}

// Track session start
if (typeof window !== 'undefined') {
  window.sessionStart = Date.now();
}

export default GHLWebhook;
