export default class GHLWebhook {
    constructor() {
        this.webhookUrl = 'https://services.leadconnectorhq.com/hooks/AEybRWw8cgDIMKRzNa0T/webhook-trigger/54ff1e67-5ee9-41f5-a0ba-d35943ec44d2';
    }

    async sendLead(leadData) {
        return await this.sendRequest('sendLead', leadData);
    }

    async sendPartnerApplication(applicationData) {
        return await this.sendRequest('sendPartnerApplication', applicationData);
    }

    async sendAppointment(appointmentData) {
        return await this.sendRequest('sendAppointment', appointmentData);
    }

    async trackFormAbandonment(abandonmentData) {
        return await this.sendRequest('trackFormAbandonment', abandonmentData);
    }

    async trackEngagement(engagementData) {
        return await this.sendRequest('trackEngagement', engagementData);
    }

    async sendRequest(action, data) {
        try {
            const response = await fetch(this.webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ action, data }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error sending request:', error);
            throw error;
        }
    }
}