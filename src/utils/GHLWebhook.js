class GHLWebhook {
    static async sendLead(leadData) {
        const response = await fetch('https://services.leadconnectorhq.com/hooks/AEybRWw8cgDIMKRzNa0T/webhook-trigger/54ff1e67-5ee9-41f5-a0ba-d35943ec44d2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadData),
        });
        return response.json();
    }

    static async sendPartnerApplication(applicationData) {
        const response = await fetch('https://services.leadconnectorhq.com/hooks/AEybRWw8cgDIMKRzNa0T/webhook-trigger/54ff1e67-5ee9-41f5-a0ba-d35943ec44d2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(applicationData),
        });
        return response.json();
    }

    static async sendAppointment(appointmentData) {
        const response = await fetch('https://services.leadconnectorhq.com/hooks/AEybRWw8cgDIMKRzNa0T/webhook-trigger/54ff1e67-5ee9-41f5-a0ba-d35943ec44d2', {
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