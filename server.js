import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// API Routes

// Partner Application Endpoint
app.post('/api/partner-application', async (req, res) => {
  try {
    const { 
      companyName, 
      contactName, 
      phone, 
      email, 
      contractorType, 
      monthlyJobs, 
      currentChallenge,
      preferredContact 
    } = req.body;

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || 'admin@cjclaimservices.com',
      subject: `New Partner Application: ${companyName}`,
      html: `
        <h2>New Contractor Partner Application</h2>
        <h3>Company Information</h3>
        <ul>
          <li><strong>Company:</strong> ${companyName}</li>
          <li><strong>Contact:</strong> ${contactName}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Type:</strong> ${contractorType}</li>
          <li><strong>Monthly Jobs:</strong> ${monthlyJobs}</li>
          <li><strong>Preferred Contact:</strong> ${preferredContact}</li>
        </ul>
        <h3>Current Challenge with Act 144</h3>
        <p>${currentChallenge || 'Not specified'}</p>
        <p><em>Application submitted: ${new Date().toLocaleString()}</em></p>
      `,
    };

    // Confirmation email to applicant
    const applicantMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Partner Application Received - CJ Claim Services',
      html: `
        <h2>Thank You for Your Partnership Application!</h2>
        <p>Dear ${contactName},</p>
        <p>We've received your partnership application for ${companyName}. Our team will review your application and contact you within 24-48 hours.</p>
        <h3>What's Next?</h3>
        <ul>
          <li>Our partnership team will review your application</li>
          <li>We'll schedule a brief consultation call</li>
          <li>Learn how we can work together under Act 144</li>
          <li>Start providing better service to your customers</li>
        </ul>
        <p>In the meantime, feel free to call us at (504) 252-8204 if you have any questions.</p>
        <p>Best regards,<br>CJ Claim Services Team</p>
      `,
    };

    // Send emails
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(applicantMailOptions);
    }

    res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });
  } catch (error) {
    console.error('Partner application error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit application' 
    });
  }
});

// Commercial Claim Inquiry Endpoint
app.post('/api/commercial-claim', async (req, res) => {
  try {
    const {
      businessName,
      contactName,
      phone,
      email,
      propertyType,
      damageType,
      estimatedLoss,
      insuranceCompany,
      claimStatus,
      notes
    } = req.body;

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || 'admin@cjclaimservices.com',
      subject: `Commercial Claim Inquiry: ${businessName}`,
      html: `
        <h2>New Commercial Claim Inquiry</h2>
        <h3>Business Information</h3>
        <ul>
          <li><strong>Business:</strong> ${businessName}</li>
          <li><strong>Contact:</strong> ${contactName}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Claim Details</h3>
        <ul>
          <li><strong>Property Type:</strong> ${propertyType}</li>
          <li><strong>Damage Type:</strong> ${damageType}</li>
          <li><strong>Estimated Loss:</strong> ${estimatedLoss}</li>
          <li><strong>Insurance Company:</strong> ${insuranceCompany || 'Not specified'}</li>
          <li><strong>Claim Status:</strong> ${claimStatus || 'Not specified'}</li>
        </ul>
        <h3>Additional Notes</h3>
        <p>${notes || 'No additional notes'}</p>
        <p><em>Inquiry submitted: ${new Date().toLocaleString()}</em></p>
      `,
    };

    // Send email
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(adminMailOptions);
    }

    res.status(200).json({ 
      success: true, 
      message: 'Inquiry submitted successfully' 
    });
  } catch (error) {
    console.error('Commercial claim error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit inquiry' 
    });
  }
});

// Appointment Booking Endpoint
app.post('/api/appointment', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      consultationType,
      preferredDate,
      preferredTime,
      notes
    } = req.body;

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || 'admin@cjclaimservices.com',
      subject: `New Appointment Request: ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <h3>Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Company:</strong> ${company || 'Not specified'}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Appointment Details</h3>
        <ul>
          <li><strong>Type:</strong> ${consultationType}</li>
          <li><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</li>
          <li><strong>Preferred Time:</strong> ${preferredTime || 'Not specified'}</li>
        </ul>
        <h3>Notes</h3>
        <p>${notes || 'No additional notes'}</p>
        <p><em>Request submitted: ${new Date().toLocaleString()}</em></p>
      `,
    };

    // Send email
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(adminMailOptions);
    }

    res.status(200).json({ 
      success: true, 
      message: 'Appointment request submitted successfully' 
    });
  } catch (error) {
    console.error('Appointment error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit appointment request' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});