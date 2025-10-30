class GHLWebhook {
    // Universal payload structure with all possible fields
    static createUniversalPayload(data) {
        return {
            firstName: data.firstName || null,
            lastName: data.lastName || null,
            email: data.email || null,
            phone: data.phone || null,
            address: data.address || null,
            companyName: data.companyName || null,
            contractorType: data.contractorType || null,
            currentChallenge: data.currentChallenge || null,
            appointmentDate: data.appointmentDate || null,
            notes: data.notes || null,
            sourceForm: data.sourceForm || 'unknown'
        };
    }

    static async sendLead(leadData) {
        const payload = this.createUniversalPayload({
            ...leadData,
            sourceForm: leadData.sourceForm || 'lead_form'
        });
        
        const response = await fetch(process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        return response.json();
    }

    static async sendPartnerApplication(applicationData) {
        const payload = this.createUniversalPayload({
            ...applicationData,
            sourceForm: applicationData.sourceForm || 'partner_application_form'
        });
        
        const response = await fetch(process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        return response.json();
    }

    static async sendAppointment(appointmentData) {
        const payload = this.createUniversalPayload({
            ...appointmentData,
            sourceForm: appointmentData.sourceForm || 'appointment_form'
        });
        
        const response = await fetch(process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        return response.json();
    }
}

export default GHLWebhook;
