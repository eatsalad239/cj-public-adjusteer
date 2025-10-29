'use strict';

function sendLead(trackingId, leadData) {
    const flatData = {
        firstName: leadData.firstName,
        lastName: leadData.lastName,
        email: leadData.email,
        phone: leadData.phone,
        address: leadData.address,
        source: leadData.source,
        formType: leadData.formType,
        timestamp: leadData.timestamp
    };
    const url = getWebhookUrl(trackingId);
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(flatData)
    });
}

function getWebhookUrl(trackingId) {
    return 'https://services.leadconnectorhq.com/hooks/AEybRWw8cgDIMKRzNa0T/webhook-trigger/54ff1e67-5ee9-41f5-a0ba-d35943ec44d2';
}

module.exports = { sendLead, getWebhookUrl };