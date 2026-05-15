import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpSecure = process.env.SMTP_SECURE === 'true';
const emailFrom = process.env.EMAIL_FROM || 'no-reply@2high2work.io';
const emailRecipient = 'info.2high2work@gmail.com';

if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
  console.warn('[server] SMTP credentials are not fully configured. /api/contact will return 500 until environment variables are set.');
}

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    return res.status(500).json({ message: 'SMTP credentials are not configured.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: emailFrom,
      to: emailRecipient,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `New message from ${name} <${email}>:\n\n${message}`,
      html: `<p><strong>New message from ${name} &lt;${email}&gt;:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('[server] error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[server] running on http://localhost:${PORT}`);
});
