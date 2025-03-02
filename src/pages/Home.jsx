import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from '../context/ThemeContext';
import { FaDiscord } from 'react-icons/fa';
import FloatingIcons from '../components/FloatingIcons';
import '../styles/Home.css';

function Home() {
  const { theme } = useContext(ThemeContext);
  const [featureRef, featureInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  return (
    <div className="home" style={{ background: theme.gradients.background }}>
      <FloatingIcons />
      <motion.div 
        className="hero glass"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ 
          background: theme.gradients.card,
          borderColor: theme.border 
        }}>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}>
          <motion.h1 
            variants={itemVariants}
          >
            Excel Music Bot
          </motion.h1>
          <motion.p 
            className="hero-subtitle" 
            variants={itemVariants}
            style={{ color: theme.textSecondary }}
          >
            Experience Premium Quality Music on Discord
          </motion.p>
          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Commands</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Filters</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </motion.div>
          <motion.div className="cta-buttons" variants={itemVariants}>
            <motion.a 
              href="https://discord.com/oauth2/authorize?client_id=1213200797844897833&scope=bot&permissions=551957155161" 
              className="invite-btn glow-effect"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                background: theme.gradients.primary,
                boxShadow: `0 0 15px ${theme.primary}80`
              }}
            >
              <FaDiscord style={{ marginRight: '8px' }} />
              Add to Discord
            </motion.a>
            <motion.a 
              href="https://discord.gg/ExcelBot" 
              className="support-btn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                borderColor: theme.border,
                color: theme.text
              }}
            >
              <FaDiscord style={{ marginRight: '8px' }} />
              Support Server
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="features-preview"
        ref={featureRef}
        initial="hidden"
        animate={featureInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{ color: theme.text }}>
        <h2 className="section-title">Premium Features</h2>
        <div className="feature-cards">
          <div className="feature-card glass">
            <div className="feature-icon">
              <span role="img" aria-label="music">🎵</span>
            </div>
            <h3>Music Filters</h3>
            <p>Enhanced audio experience with premium filters</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">
              <span role="img" aria-label="lightning">⚡</span>
            </div>
            <h3>High Quality</h3>
            <p>Crystal clear audio streaming</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">
              <span role="img" aria-label="game controller">🎮</span>
            </div>
            <h3>Easy Controls</h3>
            <p>Simple commands and intuitive interface</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;