import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    // Send emails if configured
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
}