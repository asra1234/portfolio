import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-image-container" variants={itemVariants}>
            <div className="about-image-wrapper">
              <div className="image-placeholder">
                <div className="placeholder-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div className="image-border"></div>
            </div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I am a <span className="highlight">Software Engineering undergraduate</span> with 
              a strong passion for building scalable, secure, and user-focused applications. 
              I am fluent in <span className="highlight">ASP.NET and C#</span>, and have 
              hands-on experience in full-stack development using Laravel, React.js, 
              Node.js, and Flutter, along with cloud deployment using AWS.
            </p>
            <p>
              My projects include developing an <span className="highlight">OCR-based Online 
              Traffic Fine Payment System</span> and full-stack e-commerce applications, 
              where I focused on clean architecture, secure authentication, and efficient 
              database design.
            </p>
            <p>
              I am driven by problem-solving, writing maintainable code, and continuously 
              learning new technologies to build <span className="highlight">impactful software 
              solutions</span>.
            </p>

            <div className="about-stats">
              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </motion.div>
              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">3+</div>
                <div className="stat-label">Major Projects</div>
              </motion.div>
              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedication</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
