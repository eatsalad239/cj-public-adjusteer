class GHLWebhook {
    static async sendLead(leadData) {
        const response = await fetch(process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadData),
        });
        return response.json();
    }
    static async sendPartnerApplication(applicationData) {
        const response = await fetch(process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(applicationData),
        });
        return response.json();
    }
    static async sendAppointment(appointmentData) {
        const response = await fetch(process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(appointmentData),
        });
        return response.json();
    }
}
export default GHLWebhook;
