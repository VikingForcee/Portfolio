import React from 'react';
import { Download, Award, Calendar, MapPin, Code, Database, Palette, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code,
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Next.js", "Tailwind CSS", "Sass/Less"]
    },
    {
      category: "Backend",
      icon: Database,
      technologies: ["Node.js", "Python", "Express", "Django/Flask", "MongoDB", "PostgreSQL", "Redis", "GraphQL"]
    },
    {
      category: "Data Analysis",
      icon: Palette,
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Framer", "UI/UX Principles"]
    },
    {
      category: "Machine Learning",
      icon: Globe, // Changed from Globe to a more generic icon for 'Other'
      technologies: ["Git", "Docker", "AWS", "Firebase", "Kubernetes", "CI/CD", "Jira", "Trello"]
    }
  ];

  const experience = [
    {
      title: "ML Intern",
      company: "CSIO-CSIR Chandigarh",
      period: "Jan 2025 - June 2025",
      description: "Desgined a system to grade Makhanas (Foxnuts) into different Grades. This includes, building Hardware for capturing images without any environmental factors and the Image processing machine learning model to grade the batch. "
    },
    // {
    //   title: "Full Stack Developer",
    //   company: "Digital Agency",
    //   period: "Jul 2020 - Dec 2021",
    //   description: "Developed end-to-end web solutions, building robust RESTful APIs with Node.js/Express and intuitive user interfaces with React. Managed MongoDB databases, including schema design and query optimization. Collaborated closely with design teams to translate wireframes and mockups into pixel-perfect, responsive web applications."
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "Startup Hub",
    //   period: "Sep 2019 - Jun 2020",
    //   description: "Implemented responsive web applications using modern JavaScript frameworks (React & Vue.js). Focused on component-based development and state management. Worked closely with UX designers to translate concepts into functional and aesthetically pleasing user interfaces. Contributed to agile development cycles, participating in daily stand-ups and sprint reviews."
    // }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Electrical Engineering",
      institution: "Punjab Engineering College, Chandigarh",
      period: "Nov 2022 - Present",
      description: "Currently pursuing Electrical Engineering from Punjab Engineering College (PEC). "
    }
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren", // Ensures parent animation starts before children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                About Me
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                I'm a passionate **Software developer** with keen interest in building
                robust and intuitive digital solutions. My expertise lies in transforming complex
                challenges into **clean, efficient, and user-friendly applications** that
                truly make an impact. I thrive on continuous learning and embracing new technologies to deliver exceptional results.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-lg font-medium">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <span>Chandigarh, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-lg font-medium">
                  <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <span>Available for new opportunities</span>
                </div>
              </div>
              <motion.a
                href="./public/Vibhor_Gupta.pdf"
                download="Vibhor_Resume.pdf"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download my resume"
              >
                <Download className="mr-3 h-5 w-5" />
                Download Resume
              </motion.a>
            </motion.div>
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src="./public/vibImg2.jpg"
                alt="Profile picture of Vibhor"
                className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl ring-4 ring-blue-300 dark:ring-blue-600 ring-offset-4 ring-offset-white dark:ring-offset-gray-900"
              />
            </motion.div>
          </div>
        </div>
      </section>

      ---

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Skills & Technologies
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                I leverage a diverse set of tools and technologies to build modern web solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 group border border-gray-100 dark:border-gray-700"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6 mx-auto group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    <skill.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {skill.category}
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-center">
                    {skill.technologies.map((tech, idx) => (
                      <li key={idx} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-md text-sm inline-block mx-1 my-1">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      ---

      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Experience
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                My professional journey and key contributions.
              </p>
            </div>
            <div className="space-y-10">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-start md:items-center"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Award className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-snug">
                        {exp.title}
                      </h3>
                      <p className="text-md font-semibold text-blue-600 dark:text-blue-400 mt-1 md:mt-0">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-md text-gray-600 dark:text-gray-400 mb-3 font-medium">
                      {exp.period}
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      ---

      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                My academic background and achievements.
              </p>
            </div>
            <div className="space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-start md:items-center"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Award className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-md text-gray-600 dark:text-gray-400 mb-3 font-medium">
                      {edu.period}
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;