import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Typed from 'typed.js';
import { ChevronDown, Code, Palette, Zap, ArrowRight, ExternalLink, Github } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

const Home = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const typedRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Enhanced Typed.js configuration
    const options = {
      strings: [
        'Software Developer crafting digital experiences',
        'Building responsive and modern web applications',
        'Creating solutions that inspire and engage',
        'Turning ideas into beautiful, functional code'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
      showCursor: true,
      cursorChar: '<span class="custom-cursor">|</span>',
      contentType: 'html',
    };
    const typed = new Typed(typedRef.current, options);

    // Auto-rotate carousel every 6 seconds
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => {
      typed.destroy();
      clearInterval(interval);
    };
  }, []);

  // Sample projects data
  const projects = [
    {
      id: 5,
      title: "Personal Portfolio Website",
      description: "This very website! A modern, responsive portfolio built to showcase projects and skills, featuring dark/light themes and smooth animations.",
      image: "/home1.png",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "https://github.com/VikingForcee/Portfolio",
      featured: true
    },
    {
      id: 6,
      title: "Custom Blog CMS",
      description: "A comprehensive content management system tailored for blogs, featuring a rich text editor, image uploads, and SEO optimization tools.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      tags: ["Next.js", "Strapi CMS", "GraphQL"],
      category: "fullstack",
      liveUrl: "https://your-blog-cms-demo.com",
      githubUrl: "https://github.com/VikingForcee/BlogWebsite",
      featured: false
    },
    {
      id: 7,
      title: "To-Do App",
      description: "A fully functional task management application with Clerk authentication, dynamic theming, date-wise task grouping, and real-time updates via Firebase.",
      image: "/to-do.png",
      tags: ["React", "Firebase", "Clerk", "Tailwind CSS"],
      category: "fullstack",
      liveUrl: "https://to-do-app-git-main-vibhor-guptas-projects-315c0f20.vercel.app/",
      githubUrl: "https://github.com/VikingForcee/To-Do-App",
      featured: true
    },
  ];

  const skills = [
    { icon: Code, title: 'Frontend Development', desc: 'Crafting pixel-perfect, responsive user interfaces with modern frameworks like React, Vue.js, and Angular.' },
    { icon: Palette, title: 'Data / AI-ML', desc: 'Building new solutions to problems using advanced ML Algorithms.' },
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
      x: direction > 0 ? 100 : -100,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
      scale: 0.95,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNextProject = () => {
    setDirection(1);
    nextProject();
  };

  const handlePrevProject = () => {
    setDirection(-1);
    prevProject();
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(59, 130, 246, 0.15) 0%, 
              transparent 50%),
            linear-gradient(135deg, 
              rgba(59, 130, 246, 0.1) 0%, 
              rgba(147, 51, 234, 0.1) 25%, 
              rgba(236, 72, 153, 0.1) 50%, 
              rgba(59, 130, 246, 0.1) 100%)
          `,
        }}
      >
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles */}
          
          
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 opacity-25"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 0],
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full blur-3xl" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -360],
              x: [0, -60, 0],
              y: [0, 80, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-400 via-blue-400 to-purple-400 rounded-full blur-3xl" />
          </motion.div>

          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-400 dark:border-blue-300 opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full transform rotate-45 border-2 border-purple-400 dark:border-purple-300" />
          </motion.div>
          
          {/* <motion.div
            className="absolute bottom-20 left-20 w-24 h-24 border-2 border-pink-400 dark:border-pink-300 opacity-20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          /> */}
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center max-w-5xl min-w-3xl mx-auto px-6 py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-gray-700/20">
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Hi, I'm
              </span>
              <br />
              <motion.span 
                className="text-gray-900 dark:text-white"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 30px rgba(147, 51, 234, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Vibhor
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-12 h-20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span ref={typedRef} className="font-medium" />
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link
                to="/projects"
                className="group relative inline-flex justify-center items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="group relative inline-flex justify-center items-center px-10 py-5 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <ChevronDown className="h-6 w-6 text-blue-600 dark:text-blue-400 opacity-60" />
            <ChevronDown className="h-4 w-4 text-blue-600 dark:text-blue-400 opacity-30" />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                What I Do
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I specialize in creating modern, responsive web applications with a strong focus on user experience, performance, and scalable architecture.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 mx-auto shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <skill.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
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
              <motion.h2 
                className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Featured Projects
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Explore a selection of my recent work, demonstrating my technical skills and commitment to creating impactful digital solutions.
              </motion.p>
            </div>

            <div className="relative">
              {/* Enhanced Project Carousel */}
              <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentProject}
                    variants={projectVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={direction}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="w-full"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <motion.div
                        className="order-2 lg:order-1 space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        <div className="flex flex-wrap gap-3 mb-6">
                          {projects[currentProject].tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold shadow-sm"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + tagIndex * 0.1 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                        
                        <motion.h3 
                          className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {projects[currentProject].title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {projects[currentProject].description}
                        </motion.p>
                        
                        <motion.div 
                          className="flex flex-col sm:flex-row gap-4 pt-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <a
                            href={projects[currentProject].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:scale-105"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                          >
                            Live Demo
                            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                          
                          <a
                            href={projects[currentProject].githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:scale-105"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                          >
                            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            Code
                          </a>
                        </motion.div>
                      </motion.div>
                      
                      <motion.div
                        className="order-1 lg:order-2 relative group"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                      >
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                          <img
                            src={projects[currentProject].image}
                            alt={projects[currentProject].title}
                            className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Enhanced Navigation */}
              <div className="flex justify-center mt-12 space-x-6">
                <motion.button
                  onClick={handlePrevProject}
                  className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Previous
                </motion.button>
                
                <div className="flex space-x-3 items-center">
                  {projects.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => { 
                        setDirection(index > currentProject ? 1 : -1); 
                        setCurrentProject(index); 
                      }}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentProject
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-lg'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    />
                  ))}
                </div>
                
                <motion.button
                  onClick={handleNextProject}
                  className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Next
                </motion.button>
              </div>
            </div>

            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                to="/projects"
                className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-black text-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10">View All Projects</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;