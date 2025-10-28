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
    const { name, email, phone, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone are required fields'
      });
    }

    // Create admin notification email
    const adminMailOptions = {
      from: process.env.SMTP_USER || 'noreply@example.com',
      to: process.env.ADMIN_EMAIL || 'admin@example.com',
      subject: `New Partner Application: ${name}`,
      html: `
        <h2>New Partner Application</h2>
        <h3>Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Company:</strong> ${company || 'Not specified'}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Message</h3>
        <p>${message || 'No additional message'}</p>
        <em>Application submitted: ${new Date().toLocaleString()}</em>
      `,
    };

    // Send email if credentials are available
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(adminMailOptions);
    }

    res.status(200).json({
      success: true,
      message: 'Partner application submitted successfully'
    });
  } catch (error) {
    console.error('Partner application error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit partner application'
    });
  }
});

// Appointment Endpoint
app.post('/api/appointment', async (req, res) => {
  try {
    const { name, email, phone, company, consultationType, preferredDate, preferredTime, notes } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !consultationType) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, and consultation type are required fields'
      });
    }

    // Create admin notification email
    const adminMailOptions = {
      from: process.env.SMTP_USER || 'noreply@example.com',
      to: process.env.ADMIN_EMAIL || 'admin@example.com',
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
        <em>Request submitted: ${new Date().toLocaleString()}</em>
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

// Endpoint AI Chatbot básico
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    // Ejemplo demo: responde sencillo
    const aiResponse = `AI-bot response for: "${message}"`;
    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ response: 'Error with AI backend' });
  }
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
