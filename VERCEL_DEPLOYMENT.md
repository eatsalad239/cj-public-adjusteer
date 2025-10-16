# Vercel Deployment Guide for CJ Claim Services

## Prerequisites
- Vercel account (free at vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Push Code to Git Repository

```bash
# Initialize git if not already done
git init

# Add remote repository
git remote add origin YOUR_REPOSITORY_URL

# Push to main branch
git push -u origin main
```

### 2. Import Project to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)

### 3. Configure Environment Variables

In Vercel Dashboard > Settings > Environment Variables, add:

```
# Email Configuration (Required for form submissions)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
ADMIN_EMAIL=admin@cjclaimservices.com

# Go High Level (Optional)
GHL_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID/
GHL_LOCATION_ID=your-location-id

# Notification Settings
NOTIFICATION_EMAIL=notifications@cjclaimservices.com
```

### 4. Deploy

Click "Deploy" - Vercel will:
1. Install dependencies
2. Build the project
3. Deploy to production
4. Provide you with URLs

## Post-Deployment

### Your URLs
- Production: `https://your-project.vercel.app`
- Preview: Created for each git branch

### Custom Domain (Optional)
1. Go to Settings > Domains
2. Add your domain: `cjclaimservices.com`
3. Update DNS records as instructed

### Email Setup

#### Gmail Setup:
1. Enable 2-factor authentication on Gmail
2. Generate App Password:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail"
3. Use this password as `SMTP_PASS`

#### Alternative Email Services:
- SendGrid (recommended for production)
- Mailgun
- Amazon SES

### Testing

1. **Test Health Endpoint:**
```bash
curl https://your-project.vercel.app/api/health
```

2. **Test Forms:**
- Submit a test partner application
- Submit a test appointment booking
- Verify emails are received

## Features in Vercel

### Automatic Features:
- ✅ SSL/HTTPS
- ✅ CDN distribution
- ✅ Auto-scaling
- ✅ Preview deployments
- ✅ Analytics (basic)

### Serverless Functions:
All files in `/api` directory become serverless functions:
- `/api/partner-application.js` → `/api/partner-application`
- `/api/commercial-claim.js` → `/api/commercial-claim`
- `/api/appointment.js` → `/api/appointment`
- `/api/health.js` → `/api/health`

## Monitoring

### Vercel Dashboard:
- View deployments
- Check function logs
- Monitor performance
- See error reports

### Function Logs:
```bash
vercel logs
```

## Updating the Site

### Automatic Updates:
Push to your git repository - Vercel auto-deploys

```bash
git add .
git commit -m "Update message"
git push origin main
```

### Manual Redeploy:
In Vercel dashboard, click "Redeploy"

## Troubleshooting

### Forms Not Working:
- Check environment variables are set
- Verify SMTP credentials
- Check function logs for errors

### Build Failing:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node version compatibility

### API Errors:
- Check function logs
- Verify CORS settings
- Ensure API routes match frontend calls

## Important Notes

1. **Free Tier Limits:**
   - 100GB bandwidth/month
   - 100 hours build time/month
   - Serverless function timeout: 10 seconds

2. **Production Considerations:**
   - Use environment variables for sensitive data
   - Set up proper email service (not Gmail) for production
   - Configure custom domain
   - Set up monitoring/alerts

3. **Compliance:**
   - Ensure all content is reviewed by legal counsel
   - Add Louisiana public adjuster license number
   - Update contact information

## Support

- Vercel Docs: https://vercel.com/docs
- Support: https://vercel.com/support

---

**Deployment Checklist:**
- [ ] Code pushed to Git
- [ ] Environment variables configured
- [ ] Email service tested
- [ ] Custom domain configured (optional)
- [ ] Legal review completed
- [ ] Contact info updated
- [ ] License numbers added