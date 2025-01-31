import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email, subject, message } = req.body;

    await resend.emails.send({
      from: `${email} via Portfolio <onboarding@resend.dev>`,
      to: 'work.krsna4@gmail.com',
      subject: subject,
      text: message,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}