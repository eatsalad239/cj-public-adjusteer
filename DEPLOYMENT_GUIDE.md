# CJ Claim Services B2B Platform - Deployment Guide

## Important Compliance Notes

This platform has been developed in accordance with:
- Louisiana Department of Insurance regulations for public adjusters
- Louisiana Act 144 (effective August 1, 2025) requirements
- Professional standards for public adjusting services

## Pre-Deployment Checklist

### 1. Legal Review
- [ ] Have legal counsel review all content for compliance
- [ ] Verify all claims and statements are factual and defensible
- [ ] Ensure fee disclosures meet Louisiana requirements
- [ ] Confirm referral program structure complies with regulations

### 2. License Verification
- [ ] Display Louisiana public adjuster license number prominently
- [ ] Include required disclosures per Louisiana DOI regulations
- [ ] Add any required bonds or insurance information

### 3. Content Updates Required
- [ ] Replace placeholder phone number (504-555-0100) with actual number
- [ ] Update email addresses from examples to real addresses
- [ ] Add actual business address if required by law
- [ ] Insert real license numbers and regulatory information

### 4. Go High Level Integration
```javascript
// In index.html, update these values:
window.GHL_WEBHOOK_URL = 'YOUR_ACTUAL_WEBHOOK_URL';
window.GHL_LOCATION_ID = 'YOUR_ACTUAL_LOCATION_ID';
```

### 5. Email Configuration
Create a `.env` file with:
```
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@domain.com
SMTP_PASS=your_password
ADMIN_EMAIL=admin@cjclaimservices.com
```

## Deployment Steps

### Option 1: Traditional Hosting (Recommended)

1. **Build the application:**
```bash
npm run build
```

2. **Deploy to server:**
- Upload all files to your hosting provider
- Ensure Node.js 18+ is installed
- Set up PM2 or similar process manager
- Configure SSL certificate

3. **Start the server:**
```bash
npm start
# Or with PM2:
pm2 start server.js --name cj-claim-services
```

### Option 2: Cloud Deployment

#### Vercel/Netlify (Frontend only)
```bash
# Install Vercel CLI
npm i -g vercel
# Deploy
vercel
```

#### Heroku (Full stack)
```bash
heroku create cj-claim-services
git push heroku main
heroku config:set NODE_ENV=production
```

## Post-Deployment

### 1. Testing
- [ ] Test all forms submit correctly
- [ ] Verify email notifications work
- [ ] Check Go High Level webhook integration
- [ ] Test on mobile devices
- [ ] Verify all links work

### 2. Monitoring
- [ ] Set up Google Analytics
- [ ] Configure error tracking (Sentry recommended)
- [ ] Set up uptime monitoring
- [ ] Monitor form submission rates

### 3. Compliance Maintenance
- [ ] Schedule regular legal reviews
- [ ] Keep up with Louisiana DOI bulletins
- [ ] Monitor Act 144 updates and amendments
- [ ] Maintain required documentation

## Important Legal Disclaimers

1. **Public Adjuster Services Only**: This platform is designed for licensed public adjusters only. Do not use for unlicensed activity.

2. **No Legal Advice**: Content does not constitute legal advice. Consult attorneys for legal matters.

3. **Referral Compliance**: Any referral arrangements must comply with Louisiana insurance laws and regulations.

4. **Fee Disclosure**: Ensure all fee arrangements are disclosed as required by Louisiana law.

5. **Documentation**: Keep records of all client interactions as required by regulations.

## Support Resources

### Louisiana Department of Insurance
- Website: https://ldi.la.gov/
- Public Adjuster Info: Check current licensing requirements

### Professional Organizations
- National Association of Public Insurance Adjusters (NAPIA)
- Louisiana Association of Public Adjusters (if applicable)

## Technical Support

For platform technical issues:
1. Check the README.md for common issues
2. Review server logs for errors
3. Ensure all dependencies are installed
4. Verify environment variables are set

## Updates and Maintenance

Regular updates needed for:
- Security patches (run `npm audit` regularly)
- Regulatory compliance changes
- Content updates per business needs
- Performance optimizations

## Backup Procedures

1. **Database**: Not applicable (using form submissions only)
2. **Files**: Regular backups of uploaded content
3. **Code**: Use Git for version control
4. **Emails**: Archive important communications

---

**Last Updated**: January 15, 2025
**Version**: 1.0.0
**Status**: Ready for legal review and deployment