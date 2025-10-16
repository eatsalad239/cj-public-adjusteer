#!/bin/bash

# CJ Claim Services - Vercel Deployment Script

echo "🚀 CJ Claim Services - Vercel Deployment"
echo "========================================="
echo ""

# Check if Vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "📋 Pre-deployment checklist:"
echo "----------------------------"
echo "Have you:"
echo "  ✓ Completed legal review?"
echo "  ✓ Updated phone number to (504) 252-8204?"
echo "  ✓ Added Louisiana public adjuster license number?"
echo "  ✓ Configured email settings?"
echo "  ✓ Set up Go High Level webhooks?"
echo ""

read -p "Continue with deployment? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled"
    exit 1
fi

echo ""
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo ""
echo "✅ Build successful!"
echo ""
echo "📦 Deploying to Vercel..."
echo ""
echo "Note: You'll need to:"
echo "1. Log in to Vercel (if not already)"
echo "2. Select or create a project"
echo "3. Configure environment variables in Vercel dashboard"
echo ""

# Deploy to Vercel
npx vercel --prod

echo ""
echo "🎉 Deployment complete!"
echo ""
echo "📝 Next steps:"
echo "1. Go to Vercel dashboard"
echo "2. Add environment variables:"
echo "   - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS"
echo "   - ADMIN_EMAIL"
echo "   - GHL_WEBHOOK_URL, GHL_LOCATION_ID"
echo "3. Test all forms"
echo "4. Configure custom domain (optional)"
echo ""
echo "📧 Contact: (504) 252-8204"
echo "🌐 Website: Now live on Vercel!"