import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Search, Star } from 'lucide-react'; // Added Star icon
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // IMPORTANT: Replace these with your actual project details and image URLs!
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A robust e-commerce platform offering user authentication, secure payment processing, and a comprehensive admin dashboard for managing products and orders.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "https://your-ecommerce-demo.com", // Replace with actual URL
      githubUrl: "https://github.com/your-username/ecommerce-repo", // Replace with actual URL
      featured: true
    },
    {
      id: 2,
      title: "Real-time Task Manager",
      description: "Collaborative task management application with real-time updates, team collaboration features, and an intuitive drag-and-drop interface for efficient workflow.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Firebase", "Tailwind CSS", "WebSockets"], // Changed Socket.io to WebSockets for generality
      category: "frontend",
      liveUrl: "https://your-task-manager-demo.com", // Replace with actual URL
      githubUrl: "https://github.com/your-username/task-manager-repo", // Replace with actual URL
      featured: true
    },
    {
      id: 3,
      title: "Interactive Weather Dashboard",
      description: "A visually appealing weather application providing detailed forecasts, interactive maps, and location-based weather alerts using modern APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=600&q=80",
      tags: ["Vue.js", "OpenWeather API", "Chart.js", "Responsive Design"],
      category: "frontend",
      liveUrl: "https://your-weather-demo.com", // Replace with actual URL
      githubUrl: "https://github.com/your-username/weather-app-repo", // Replace with actual URL
      featured: false
    },
    {
      id: 4,
      title: "Social Media REST API",
      description: "A robust RESTful API backend for a social media platform, including user authentication, post management, comments, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=600&q=80",
      tags: ["Node.js", "Express.js", "PostgreSQL", "JWT Authentication"],
      category: "backend",
      liveUrl: "https://your-social-api-docs.com", // Link to API docs if no live demo
      githubUrl: "https://github.com/your-username/social-api-repo", // Replace with actual URL
      featured: false
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description: "This very website! A modern, responsive portfolio built to showcase projects and skills, featuring dark/light themes and smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "frontend",
      liveUrl: "#", // This is the current site
      githubUrl: "https://github.com/your-username/your-portfolio-repo", // Replace with actual URL
      featured: true
    },
    {
      id: 6,
      title: "Custom Blog CMS",
      description: "A comprehensive content management system tailored for blogs, featuring a rich text editor, image uploads, and SEO optimization tools.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      tags: ["Next.js", "Strapi CMS", "GraphQL", "Cloudinary"],
      category: "fullstack",
      liveUrl: "https://your-blog-cms-demo.com", // Replace with actual URL
      githubUrl: "https://github.com/your-username/blog-cms-repo", // Replace with actual URL
      featured: false
    },
    {
      id: 7,
      title: "Cross-Platform Expense Tracker",
      description: "A mobile-first personal finance management application with intuitive budget tracking, expense categorization, and insightful financial reports.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      tags: ["React Native", "Expo", "Firebase", "Redux Toolkit"],
      category: "mobile",
      liveUrl: "https://your-expense-tracker-store.com", // Link to app store or Expo snack
      githubUrl: "https://github.com/your-username/expense-tracker-mobile", // Replace with actual URL
      featured: false
    },
    {
      id: 8,
      title: "Modern Chat Application",
      description: "A real-time chat application featuring private messaging, group chats, and seamless file sharing capabilities for enhanced communication.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Socket.IO", "Node.js", "Express", "MongoDB"],
      category: "fullstack",
      liveUrl: "https://your-chat-app-demo.com", // Replace with actual URL
      githubUrl: "https://github.com/your-username/chat-app-repo", // Replace with actual URL
      featured: false
    },
    {
        id: 9,
        title: "AI Code Companion",
        description: "An AI-powered assistant integrated into the development environment to provide code suggestions, bug fixes, and explanations in real-time.",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe65553?auto=format&fit=crop&w=600&q=80",
        tags: ["Python", "Flask", "OpenAI API", "VS Code Extension"],
        category: "backend",
        liveUrl: "https://your-ai-companion-demo.com",
        githubUrl: "https://github.com/your-username/ai-code-companion",
        featured: true
    },
    {
        id: 10,
        title: "Decentralized Voting DApp",
        description: "A secure and transparent decentralized application (DApp) for voting, built on the Ethereum blockchain.",
        image: "https://images.unsplash.com/photo-1620092102142-b05b3b4b5b0f?auto=format&fit=crop&w=600&q=80",
        tags: ["Solidity", "Ethereum", "React", "Web3.js"],
        category: "blockchain",
        liveUrl: "https://your-dapp-demo.com",
        githubUrl: "https://github.com/your-username/voting-dapp",
        featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' }, // Added featured filter
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' },// Added Blockchain category
  ];

  const filterProjects = (project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  };

  const searchProjects = (project) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      project.description.toLowerCase().includes(lowerCaseSearchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm)) ||
      project.category.toLowerCase().includes(lowerCaseSearchTerm)
    );
  };

  const filteredAndSearchedProjects = projects
    .filter(filterProjects)
    .filter(searchProjects);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            A curated showcase of my development journey, spanning a diverse range of frontend, backend, full-stack, mobile, and even blockchain solutions.
          </motion.p>
        </div>
      </section>

      ---

      {/* Projects Grid with Filters and Search */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore My Work
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Filter by category or search by keywords to find exactly what you're looking for.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-inner border border-gray-200 dark:border-gray-800">
            {/* Search Input */}
            <div className="relative w-full md:w-80 lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects by title, description, or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm"
                aria-label="Search projects"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide"> {/* Added scrollbar-hide */}
              <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
              <div className="flex flex-nowrap gap-3"> {/* Changed to flex-nowrap */}
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-5 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-in-out shadow-sm hover:shadow-md
                      ${activeFilter === filter.key
                          ? 'bg-blue-600 text-white transform scale-105'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600 hover:text-blue-700 dark:hover:text-blue-300'
                      }`}
                    aria-pressed={activeFilter === filter.key}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <AnimatePresence mode="wait"> {/* Use AnimatePresence for exit animations */}
              {filteredAndSearchedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col h-full border border-gray-100 dark:border-gray-800"
                  variants={itemVariants}
                  layout // Enables smooth transitions when items are filtered/reordered
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
                      {project.featured && (
                        <span className="inline-flex items-center px-3 py-1 bg-yellow-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm shadow">
                          <Star className="h-3 w-3 mr-1 fill-current" /> Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, index) => ( // Show max 4 tags
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium shadow-sm">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4 mt-auto"> {/* mt-auto pushes buttons to bottom */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        aria-label={`View code on GitHub for ${project.title}`}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredAndSearchedProjects.length === 0 && (
              <motion.div
                className="text-center py-12 lg:col-span-3" // Span across all columns
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-600 dark:text-gray-400 text-xl font-medium">
                  No projects found matching your criteria.
                </p>
                <p className="text-gray-500 dark:text-gray-500 mt-2">
                  Try adjusting your search term or selecting a different filter.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;