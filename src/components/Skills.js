import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaJs, FaPhp, FaReact, FaNodeJs, FaBootstrap, FaDatabase, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiCsharp, SiKotlin, SiDart, SiLaravel, SiFlutter, SiSvelte, SiTailwindcss, SiMysql, SiMicrosoftsqlserver, SiMongodb, SiTableau } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'C#', icon: <SiCsharp />, color: '#239120' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
        { name: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' },
        { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
        { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Svelte', icon: <SiSvelte />, color: '#FF3E00' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      ],
    },
    {
      title: 'UI Frameworks',
      skills: [
        { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'MS SQL Server', icon: <SiMicrosoftsqlserver />, color: '#CC2927' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Tableau', icon: <SiTableau />, color: '#E97627' },
        { name: 'REST APIs', icon: <FaDatabase />, color: '#667eea' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
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
    <section className="skills" id="skills" ref={ref}>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={categoryVariants}>
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={categoryVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
