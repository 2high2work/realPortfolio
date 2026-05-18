import nodemailer from 'nodemailer';

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpSecure = process.env.SMTP_SECURE === 'true';
const emailFrom = process.env.EMAIL_FROM || 'no-reply@2high2work.io';
const emailRecipient = 'info.2high2work@gmail.com';

const createTransporter = () => {
  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    throw new Error('SMTP credentials are not configured.');
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    res.status(400).json({ message: 'Name, email, and message are required.' });
    return;
  }

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: emailFrom,
      to: emailRecipient,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `New message from ${name} <${email}>:\n\n${message}`,
      html: `<p><strong>New message from ${name} &lt;${email}&gt;:</strong></p><p>${String(message).replace(/\n/g, '<br>')}</p>`,
    });

    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('contact api error', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
}
