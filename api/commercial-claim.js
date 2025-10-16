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

    // Send email if configured
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
}