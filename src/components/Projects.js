import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Online Traffic Fine Payment System',
      subtitle: 'OCR-Based Final Year Project',
      description:
        'Designed and developed an OCR-based system to automatically extract data from driving licenses and vehicle number plates. Built mobile applications for police officers and drivers and a web-based admin dashboard. Automated traffic violation detection and fine generation with minimal manual input.',
      features: [
        'OCR data extraction from licenses & plates',
        'Mobile apps for police & drivers',
        'Web-based admin dashboard',
        'Automated violation detection',
        'Secure online payment integration',
        'Trained OCR models using Kaggle datasets',
      ],
      technologies: ['Tesseract OCR', 'Flutter', 'React.js', 'Node.js', 'MS SQL Server'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'E-Commerce Web Application',
      subtitle: 'Full-Stack Laravel Project',
      description:
        'Developed a comprehensive full-stack e-commerce web application using Laravel (PHP). Implemented robust product management, user authentication, and order handling systems with a responsive UI designed using Livewire and Tailwind CSS.',
      features: [
        'Complete product management',
        'Secure user authentication',
        'Order handling system',
        'Responsive UI with Livewire',
        'MySQL database integration',
        'Admin panel for management',
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'Livewire', 'Tailwind CSS'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'E-Commerce Mobile Application',
      subtitle: 'Flutter & Firebase Project',
      description:
        'Developed a full-stack mobile e-commerce application using Flutter and Firebase. Implemented user authentication, product listings, cart, and order management with REST APIs for dynamic data handling.',
      features: [
        'User authentication with Firebase',
        'Product listings & search',
        'Shopping cart functionality',
        'Order management system',
        'REST API integration',
        'Firebase Firestore database',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'REST APIs'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="projects" id="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={projectVariants}>
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={projectVariants}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-header" style={{ background: project.gradient }}>
                <div className="project-number">0{index + 1}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Uncomment if you want to add links later
                <div className="project-links">
                  <motion.a
                    href="#"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href="#"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
                */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
