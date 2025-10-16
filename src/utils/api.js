// API utility for Vercel deployment
const API_BASE = process.env.NODE_ENV === 'production' 
  ? '' // Use same domain in production
  : 'http://localhost:3000'; // Use local dev server

export const api = {
  async post(endpoint, data) {
    try {
      const response = await fetch(`${API_BASE}/api/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Request failed');
      }
      
      return result;
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      throw error;
    }
  },

  async partnerApplication(data) {
    return this.post('partner-application', data);
  },

  async commercialClaim(data) {
    return this.post('commercial-claim', data);
  },

  async appointment(data) {
    return this.post('appointment', data);
  },

  async health() {
    const response = await fetch(`${API_BASE}/api/health`);
    return response.json();
  }
};

export default api;