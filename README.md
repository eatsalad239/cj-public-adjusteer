# CJ Claim Services - B2B Platform

## Louisiana's Trusted Public Adjusters - Act 144 Compliant Partner Portal

A comprehensive B2B platform for CJ Claim Services, designed to help Louisiana contractors navigate Act 144 compliance while maintaining their insurance-based revenue streams through legal partnership programs.

## 🚀 Features

### For Contractors
- **Act 144 Compliance Solution**: Legal partnership program for contractors affected by new Louisiana insurance laws
- **Professional Partnership Program**: Collaborative approach for Act 144 compliance
- **Partner Portal**: Track customer claims and access resources (coming soon)
- **Educational Resources**: Complete Act 144 compliance guide and best practices
- **Co-Marketing Support**: Joint marketing materials and customer education resources

### For Commercial Property Owners
- **Expert Claim Management**: Professional handling of complex commercial insurance claims
- **24/7 Emergency Response**: Immediate documentation of damage to protect claims
- **Professional Settlement Advocacy**: Expert representation for fair settlements
- **Business Interruption Claims**: Specialized expertise in lost revenue claims

### Platform Features
- **Go High Level Integration**: Full webhook integration for automated lead capture and CRM sync
- **Appointment Booking System**: Online scheduling for consultations
- **Multi-Channel Lead Capture**: Forms optimized for contractor partners and commercial clients
- **Email Automation**: Automated follow-ups and nurture sequences
- **Mobile Responsive**: Fully optimized for all devices
- **Performance Optimized**: Fast loading with lazy loading and code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Backend**: Node.js, Express
- **Email**: Nodemailer
- **Notifications**: React Hot Toast
- **Icons**: Heroicons
- **State Management**: Zustand
- **Routing**: React Router v6

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd webapp
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
- SMTP settings for email
- Go High Level webhook URLs
- API endpoints

4. Run development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Run production server:
```bash
npm start
```

## 🔧 Configuration

### Go High Level Setup
1. Add your webhook URL to `index.html`:
```javascript
window.GHL_WEBHOOK_URL = 'your-webhook-url';
window.GHL_LOCATION_ID = 'your-location-id';
```

2. Webhook events tracked:
- Page views
- Form submissions
- Partner applications
- Appointment bookings
- User engagement metrics

### Email Configuration
Configure SMTP settings in `.env`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 📱 Pages

- **Home** (`/`) - Main landing page with services overview
- **Contractor Partners** (`/contractor-partners`) - Act 144 partnership program
- **Commercial Services** (`/commercial-services`) - Commercial property claims
- **Partner Portal** (`/partner-portal`) - Contractor dashboard (coming soon)
- **Book Appointment** (`/book-appointment`) - Online scheduling
- **Act 144 Resources** (`/act-144-resources`) - Compliance information
- **Contact** (`/contact`) - Contact information
- **Legal Disclaimer** (`/legal-disclaimer`) - Legal notices
- **Privacy Policy** (`/privacy-policy`) - Privacy information

## 🎨 Design System

### Colors
- Primary: `#C41E3A` (CJ Red)
- Dark: `#8B0000` (CJ Dark)
- Light: `#DC143C` (CJ Light)
- Secondary: `#1F2937` (Gray)
- Success: `#10B981` (Green)
- Warning: `#F59E0B` (Amber)
- Danger: `#EF4444` (Red)

### Typography
- Headings: Merriweather (Serif)
- Body: Inter (Sans-serif)

## 📊 API Endpoints

### Backend API
- `POST /api/partner-application` - Submit contractor partnership application
- `POST /api/commercial-claim` - Submit commercial claim inquiry
- `POST /api/appointment` - Book consultation appointment
- `GET /api/health` - Health check endpoint

### Go High Level Webhooks
- Lead capture
- Partner applications
- Appointment bookings
- Page tracking
- Engagement metrics

## 🚦 Louisiana Act 144 Compliance

This platform is designed to ensure full compliance with Louisiana Act 144 (effective August 1, 2025):

### What Contractors Can't Do:
- Handle insurance claims
- Act as insurance adjusters
- Advertise insurance claim services
- Use contingency contracts
- Interpret insurance policies

### Our Solution:
- Licensed public adjusters handle all insurance matters
- Legal referral partnership program
- Contractors focus on repairs only
- Full compliance with state regulations

## 📈 Performance Optimization

- Lazy loading for images and components
- Code splitting for routes
- Optimized bundle size with Vite
- Tailwind CSS purging for minimal CSS
- Server-side caching headers
- Compressed assets

## 🔐 Security

- Input validation on all forms
- XSS protection
- CORS configured
- Environment variable protection
- Secure email handling
- Privacy-compliant data handling

## 📝 Legal Disclaimers

All operations comply with:
- Louisiana Act 144 (House Bill 121)
- Louisiana Department of Insurance regulations
- Public adjuster licensing requirements
- Data privacy regulations

## 🤝 Support

For technical support or questions:
- Email: info@cjclaimservices.com
- Phone: 504-555-0100
- Business Hours: Mon-Fri 8AM-6PM, Sat 9AM-2PM
- 24/7 Emergency Response Available

## 📄 License

Proprietary - CJ Claim Services. All rights reserved.

---

**Note**: This platform is for legitimate business operations in compliance with Louisiana insurance laws. CJ Claim Services is a licensed public adjusting firm authorized to handle insurance claims on behalf of policyholders.