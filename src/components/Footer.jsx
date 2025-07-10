import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

// ... (imports remain the same)

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/VikingForcee', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vibhor-gupta-221a3328a/', label: 'LinkedIn' },
    // { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: Mail, href: 'mailto:vibhor4dev@gmail.com', label: 'Email' }
  ];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
];


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"> {/* Changed background */}
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-extrabold mb-4 text-blue-300">Vibhor Gupta</h3> {/* Increased size, changed color */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              Software developer passionate about creating innovative solutions and beautiful user experiences. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" // Added focus states
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white hover:underline transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" // Added underline and focus
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:vibhor4dev@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  vibhor4dev@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Chandigarh, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700"> {/* Slightly lighter border for contrast */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Vibhor Gupta. Made with <Heart className="h-4 w-4 text-red-500 inline mx-1" /> and lots of coffee.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" // Added focus states
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;