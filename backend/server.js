import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
}));
app.use(express.json());

const validateInput = (name, email, message) => {
  if (!name || !email || !message) return 'All fields are required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Invalid email format';
  return null;
};

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const error = validateInput(name, email, message);
  if (error) return res.status(400).json({ error });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Portfolio Form <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_RECEIVER,
    subject: subject || `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'None'}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Error sending email:', err.message);
    res.status(500).json({ error: 'Email sending failed', details: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
