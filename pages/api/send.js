import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email, subject, message } = req.body;

    await resend.emails.send({
      from: `${email} via Portfolio <onboarding@resend.dev>`,
      to: 'work.krsna4@gmail.com',
      reply_to: email,
      subject: subject,
      text: message,
    });

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ success: true });
    
  } catch (error) {
    console.error('Email error:', error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ 
      error: error.message || 'Internal Server Error' 
    });
  }
}