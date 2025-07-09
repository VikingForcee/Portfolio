import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('🚀 Starting server...');
console.log('📧 Email user:', process.env.MAIL_USER ? 'SET' : 'NOT SET');
console.log('🔑 Email pass:', process.env.MAIL_PASS ? 'SET' : 'NOT SET');
console.log('📬 Email receiver:', process.env.MAIL_RECEIVER ? 'SET' : 'NOT SET');

const app = express();

// CORS - Allow all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON bodies
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Root endpoint
app.get('/', (req, res) => {
  console.log('Root endpoint hit');
  res.json({ 
    message: 'Portfolio API is running!',
    timestamp: new Date().toISOString(),
    env: {
      nodeEnv: process.env.NODE_ENV,
      port: process.env.PORT || 3001,
      emailConfigured: !!process.env.MAIL_USER
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  console.log('Health check endpoint hit');
  res.json({ 
    status: 'OK', 
    message: 'Server is running and updated!',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Contact form endpoint
app.post('/contact', async (req, res) => {
  console.log('📨 Contact form submission received');
  console.log('Request body:', req.body);
  
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    console.log('❌ Validation failed - missing required fields');
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Check email configuration
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.log('❌ Email not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    console.log('🔧 Creating email transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    console.log('📧 Preparing email...');
    const mailOptions = {
      from: `Portfolio Form <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER || process.env.MAIL_USER,
      subject: subject || `Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'None'}\nMessage: ${message}`,
    };

    console.log('📤 Sending email...');
    await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('❌ Error sending email:', err);
    res.status(500).json({ 
      error: 'Email sending failed', 
      details: err.message 
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  console.log('❌ 404 - Route not found:', req.path);
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('💥 Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Server URL: https://portfolio-34nk.onrender.com`);
  console.log(`📧 Email configured: ${process.env.MAIL_USER ? 'Yes' : 'No'}`);
});