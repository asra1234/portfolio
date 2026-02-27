import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-bg"></div>
        <div className="particles"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-greeting" variants={itemVariants}>
          Hi, I'm
        </motion.div>

        <motion.h1 className="hero-name" variants={itemVariants}>
          Fathima Asra Suhair
        </motion.h1>

        <motion.div className="hero-title" variants={itemVariants}>
          <span className="gradient-text">Software Engineer</span>
        </motion.div>

        <motion.p className="hero-description" variants={itemVariants}>
          Passionate about building scalable, secure, and user-focused applications
          <br />
          using modern technologies
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          <motion.a
            href="https://github.com/asra1234"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/azra-suhair-093b94294/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:suhairazra@gmail.com"
            className="social-icon"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="scroll-arrow"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
