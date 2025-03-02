import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Navbar.css';
import logo from '../styles/logo.png';

function Navbar() {
  const { theme, themeMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        background: theme.backgroundSecondary,
        boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1)`
      }}
    >
      <motion.div 
        className="nav-brand"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link to="/" style={{ color: theme.text }}>
          <img 
            src={logo} 
            alt="Excel Music Logo"
            style={{ 
              width: '32px', 
              height: '32px', 
              marginRight: '8px',
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
            }} 
          />
          <span style={{
            textShadow: `0 0 10px ${theme.primary}40`,
            fontWeight: 'bold'
          }}>Excel Music</span>
        </Link>
      </motion.div>
      
      <div className="nav-links">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <Link to="/" style={{ color: theme.text }}>Home</Link>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <Link to="/commands" style={{ color: theme.text }}>Commands</Link>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <Link to="/premium" style={{ color: theme.text }}>Premium</Link>
        </motion.div>
        
        <motion.button 
          className="theme-toggle"
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          style={{ 
            background: theme.primary,
            color: '#FFFFFF'
          }}
        >
          {themeMode === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default Navbar;