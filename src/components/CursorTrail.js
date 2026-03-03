import React, { useEffect, useState } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate initial stars
    const generateStars = () => {
      const starCount = 300; // Number of stars
      const newStars = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // Position as percentage
          y: Math.random() * 100,
          size: Math.random() * 3 + 1, // Size between 1-4px
          speed: Math.random() * 0.5 + 0.3, // Movement speed
          opacity: Math.random() * 0.7 + 0.3, // Opacity between 0.3-1
        });
      }
      
      setStars(newStars);
    };

    generateStars();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position as percentage of screen
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="starfield-container">
      {stars.map((star) => {
        // Calculate parallax offset based on mouse position
        const offsetX = mousePosition.x * star.speed * 50;
        const offsetY = mousePosition.y * star.speed * 50;
        
        return (
          <div
            key={star.id}
            className="star"
            style={{
              left: `calc(${star.x}% + ${offsetX}px)`,
              top: `calc(${star.y}% + ${offsetY}px)`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;
