# Vibhor Gupta — Developer Portfolio

A modern, responsive, and professional developer portfolio built using **React**, **Tailwind CSS**, and **EmailJS**. The site showcases my skills, projects, and includes a fully functional contact form. It was originally configured with a Node.js + Express backend hosted on Render, but later optimized by shifting to **EmailJS** for direct frontend email support, eliminating backend downtime and improving reliability.

---

## 🔗 Live Demo

> 🌐 [Visit Portfolio](https://portfolio-vibhor-guptas-projects-315c0f20.vercel.app/)

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS
- **Contact Form**: EmailJS (previously Node.js + Nodemailer on Render)
- **Deployment**: Vercel (Frontend), Render (Initial backend)
- **Icons**: Lucide React
- **Animations**: CSS3 Transitions & Keyframes

---

## 📬 Contact Form Evolution

Initially, the contact form sent emails using:

- A **Node.js + Express** server
- **Nodemailer + Gmail SMTP**
- Hosted on [Render](https://render.com)

### Why we shifted to EmailJS:

- Render free tier goes into **sleep mode** after 15 mins of inactivity, causing delays
- EmailJS enables **frontend-only email support**, eliminating the need for a custom backend
- Fast, secure, and reliable for portfolio use cases
- Better user experience with instant form submissions

---

## 🖼️ Screenshots

### 📌 Home Page Preview
![Homepage Screenshot](/home.png)

### 📱 Mobile Responsive Design
![Mobile View](/home2.png)

### 📧 About Page
![About Page](/about1.png)

### 🎨 Projects Section
![Projects Section](/projects1.png)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vibhor-portfolio.git
   cd vibhor-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up EmailJS**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key

4. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Visit `http://localhost:5173` to view the portfolio

---

## 🔧 Configuration

### EmailJS Setup

1. **Service Configuration**
   - Go to EmailJS dashboard
   - Add your email service (Gmail recommended)
   - Note down the Service ID

2. **Template Setup**
   Create a template with these variables:
   ```
   {{from_name}} - Sender's name
   {{from_email}} - Sender's email
   {{message}} - Message content
   {{to_name}} - Your name (recipient)
   ```

3. **Integration**
   Update the contact form component with your EmailJS credentials

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to Vercel

1. **Using Vercel CLI**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Using GitHub Integration**
   - Connect your GitHub repository to Vercel
   - Set environment variables in Vercel dashboard
   - Deploy automatically on push

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository

---

## 🌟 Features

- **Fully Responsive Design** - Works on all devices
- **Modern UI/UX** - Clean and professional interface
- **Interactive Elements** - Smooth animations and transitions
- **Contact Form** - Functional email contact form with EmailJS
- **Skills Showcase** - Dynamic skills section with proficiency levels
- **Project Portfolio** - Detailed project cards with live demos
- **SEO Optimized** - Meta tags and structured data
- **Fast Loading** - Optimized images and code splitting

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- **React** - For the amazing JavaScript library
- **Tailwind CSS** - For the utility-first CSS framework
- **EmailJS** - For the frontend email service
- **Vercel** - For the seamless deployment platform
- **Lucide React** - For the beautiful icons

---

## 📞 Contact

**Vibhor Gupta**

- 📧 Email: [vibhor4dev@gmail.com](mailto:vibhor4dev@example.com)
- 💼 LinkedIn: [https://www.linkedin.com/in/vibhor-gupta-221a3328a/](https://www.linkedin.com/in/vibhor-gupta-221a3328a/)
- 🐙 GitHub: [https://github.com/VikingForcee](https://github.com/VikingForcee)
- 🌐 Portfolio: [portfolio](https://portfolio-vibhor-guptas-projects-315c0f20.vercel.app/)

---

⭐ **If you found this project helpful, please give it a star!**