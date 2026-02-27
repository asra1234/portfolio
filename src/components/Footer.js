import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="footer-logo">FAS</h3>
            <p className="footer-tagline">Building the future, one line of code at a time</p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4>Connect With Me</h4>
            <div className="social-links">
              <motion.a
                href="https://github.com/asra1234"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/azra-suhair-093b94294/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:suhairazra@gmail.com"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>
            © {currentYear} Fathima Asra Suhair. Made with <FaHeart className="heart-icon" /> 
            using React.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
