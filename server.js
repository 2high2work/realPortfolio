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
      html: `
      <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:40px 20px; color:#111;"> <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e5e5e5;"> <div style="padding:24px 32px; border-bottom:1px solid #e5e5e5;"> <h1 style="margin:0; font-size:22px;">New Portfolio Inquiry</h1> </div> <div style="padding:32px;"> <div style="margin-bottom:24px;"> <p style="margin:0 0 6px; font-size:12px; text-transform:uppercase; color:#666; letter-spacing:1px;"> Name </p> <p style="margin:0; font-size:16px; font-weight:600;"> ${name} </p> </div> <div style="margin-bottom:24px;"> <p style="margin:0 0 6px; font-size:12px; text-transform:uppercase; color:#666; letter-spacing:1px;"> Email </p> <p style="margin:0; font-size:16px;"> <a href="mailto:${email}" style="color:#111;"> ${email} </a> </p> </div> <div> <p style="margin:0 0 12px; font-size:12px; text-transform:uppercase; color:#666; letter-spacing:1px;"> Message </p> <div style="background:#f8f8f8; border:1px solid #e5e5e5; border-radius:8px; padding:18px; line-height:1.7; font-size:15px;"> ${message.replace(/\n/g, '<br>')} </div> </div> </div> <div style="padding:20px 32px; border-top:1px solid #e5e5e5; font-size:12px; color:#777;"> Sent from your portfolio contact form </div> </div> </div>
      `,
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
