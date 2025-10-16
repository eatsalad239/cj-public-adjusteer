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

    // Send email if configured
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
}