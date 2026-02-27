import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">FAS</span>
        </motion.div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')} className="navbar-link">
            Home
          </a>
          <a href="#about" onClick={() => scrollToSection('about')} className="navbar-link">
            About
          </a>
          <a href="#skills" onClick={() => scrollToSection('skills')} className="navbar-link">
            Skills
          </a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="navbar-link">
            Projects
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="navbar-link">
            Contact
          </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
