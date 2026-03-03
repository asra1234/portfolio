import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const moveX = (mouseX - 0.5) * 50;
      const moveY = (mouseY - 0.5) * 50;
      
      const stars1 = document.querySelector('.stars-layer-1');
      const stars2 = document.querySelector('.stars-layer-2');
      
      if (stars1) {
        stars1.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
      if (stars2) {
        stars2.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div className="stars-layer-1"></div>
      <div className="stars-layer-2"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
