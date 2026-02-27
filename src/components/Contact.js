import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For now, just show a success message
    // You can integrate EmailJS or any other email service here
    setStatus('Message sent successfully! I\'ll get back to you soon.');
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setStatus('');
    }, 3000);
  };

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
        duration: 0.5,
      },
    },
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Let's work together on your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's Talk</h3>
            <p>
              I'm currently available for freelance work and full-time opportunities. 
              If you have a project that you want to get started, think you need my 
              help with something, or just fancy saying hey, then get in touch.
            </p>

            <div className="contact-details">
              <motion.a
                href="mailto:suhairazra@gmail.com"
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <FaEnvelope className="contact-icon" />
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">suhairazra@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/asra1234"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <FaGithub className="contact-icon" />
                <div>
                  <div className="contact-label">GitHub</div>
                  <div className="contact-value">@asra1234</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/azra-suhair-093b94294/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <FaLinkedin className="contact-icon" />
                <div>
                  <div className="contact-label">LinkedIn</div>
                  <div className="contact-value">Fathima Asra Suhair</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="6"
                className="form-input"
              />
            </div>

            {status && (
              <motion.div
                className="form-status"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status}
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
