import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Typed from 'typed.js';
import { ChevronDown, Code, Palette, Zap, ArrowRight, ExternalLink, Github } from 'lucide-react';

const Home = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const typedRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Initialize Typed.js for typing effect
    const options = {
      strings: [
        'Software Developer crafting digital experiences',
        'Building responsive and modern web applications',
        'Creating solutions that inspire and engage'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: false, // Make cursor visible
      cursorChar: '|', // Customize cursor character
    };
    const typed = new Typed(typedRef.current, options);

    // Auto-rotate carousel every 5 seconds
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => {
      typed.destroy();
      clearInterval(interval);
    };
  }, []);

  // Sample projects data - enhanced with more realistic image sizes and alt texts
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React, Node.js, and MongoDB, featuring a seamless shopping experience and robust backend functionality.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&h=800&auto=format&fit=crop',
      alt: 'Screenshot of an e-commerce platform with product listings',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Collaborative Task Management App',
      description: 'A real-time collaborative task management application with intuitive drag-and-drop features and instant updates, powered by Firebase.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&h=800&auto=format&fit=crop',
      alt: 'Screenshot of a task management app with multiple tasks and categories',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Interactive Weather Dashboard',
      description: 'A beautifully designed weather application providing detailed forecasts, interactive maps, and historical data visualization using various APIs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&h=800&auto=format&fit=crop',
      alt: 'Screenshot of a weather dashboard displaying temperature and forecast',
      tags: ['Vue.js', 'Weather API', 'Chart.js', 'Vuex'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const skills = [
    { icon: Code, title: 'Frontend Development', desc: 'Crafting pixel-perfect, responsive user interfaces with modern frameworks like React, Vue.js, and Angular.' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Designing intuitive and engaging user experiences, from wireframing to high-fidelity mockups using tools like Figma and Adobe XD.' },
    { icon: Zap, title: 'Backend Development', desc: 'Building robust and scalable server-side applications and APIs using Node.js, Python, and various database technologies.' },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Animation variants for Framer Motion
  const projectVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100, // Dynamic entry based on direction
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100, // Dynamic exit based on direction
    }),
  };

  const [direction, setDirection] = useState(0); // State to manage animation direction

  const handleNextProject = () => {
    setDirection(1);
    nextProject();
  };

  const handlePrevProject = () => {
    setDirection(-1);
    prevProject();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden p-4">
        {/* Animated Background with Glassmorphism */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <motion.div
              className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0], x: [-20, 20, -20] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
              animate={{ scale: [1.1, 1, 1.1], rotate: [0, -10, 0], y: [-20, 20, -20] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-100 md:h-100 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
              animate={{ scale: [1, 1.2, 1], x: [20, -20, 20] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </div>
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-5xl sm:text-5xl md:text-7xl px-8 font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Hi, I'm <span className="text-gray-900 dark:text-white inline-block">Vibhor</span>
            </h1>
            <p
              ref={typedRef}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto h-16 flex items-center justify-center" // Fixed height for Typed.js
              aria-live="polite"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
                aria-label="View my projects"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-semibold text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:border-blue-400 dark:text-blue-400 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
                aria-label="Contact me"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} // Smooth scroll on click
          aria-label="Scroll down"
        >
          <ChevronDown className="h-10 w-10 text-gray-600 dark:text-gray-400 opacity-75 hover:opacity-100 transition-opacity" aria-hidden="true" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }} // Trigger earlier
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                What I Do
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I specialize in creating modern, responsive web applications with a strong focus on **user experience**, **performance**, and **scalable architecture**.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 group backdrop-filter backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 border border-gray-100 dark:border-gray-700"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="flex items-center justify-center w-20 h-20 bg-blue-50 dark:bg-blue-950 rounded-full mb-6 mx-auto group-hover:bg-blue-100 dark:group-hover:bg-blue-800 transition-colors duration-300 transform group-hover:rotate-6">
                    <skill.icon className="h-10 w-10 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {skill.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explore a selection of my recent work, demonstrating my technical skills and commitment to creating impactful digital solutions.
              </p>
            </div>

            <div className="relative">
              {/* Project Carousel */}
              <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 bg-gray-50 dark:bg-gray-800">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentProject}
                    variants={projectVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={direction}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <motion.div
                        className="order-2 lg:order-1 p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <div className="space-y-6">
                          <div className="flex flex-wrap gap-3 mb-4">
                            {projects[currentProject].tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            {projects[currentProject].title}
                          </h3>
                          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {projects[currentProject].description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <a
                              href={projects[currentProject].liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
                              aria-label={`View live demo of ${projects[currentProject].title}`}
                            >
                              Live Demo
                              <ExternalLink className="ml-2 h-5 w-5" />
                            </a>
                            <a
                              href={projects[currentProject].githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-7 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
                              aria-label={`View source code of ${projects[currentProject].title}`}
                            >
                              <Github className="mr-2 h-5 w-5" />
                              Code
                            </a>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        className="order-1 lg:order-2 relative group p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                      >
                        <img
                          src={projects[currentProject].image}
                          alt={projects[currentProject].alt}
                          className="w-full h-72 sm:h-80 md:h-96 lg:h-[450px] object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-102 border-2 border-gray-100 dark:border-gray-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                          <p className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">Explore Project</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex justify-center mt-10 space-x-4">
                <button
                  onClick={handlePrevProject}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
                  aria-label="Previous project"
                >
                  Previous
                </button>
                <div className="flex space-x-2 items-center">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => { setDirection(index > currentProject ? 1 : -1); setCurrentProject(index); }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 ${
                        index === currentProject
                          ? 'bg-blue-600 scale-125'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNextProject}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
                  aria-label="Next project"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link
                to="/projects"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-bold text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg-purple focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
                aria-label="View all projects"
              >
                View All Projects
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;