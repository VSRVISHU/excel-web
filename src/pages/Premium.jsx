import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Premium.css';

function Premium() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="premium-page">
      <div className="premium-hero">
        <h1>Upgrade Your Music Experience</h1>
        <p>Get access to exclusive features and enhanced quality</p>
      </div>

      <div className="premium-plans">
        <div className="premium-plan">
          <div className="plan-badge">MOST POPULAR</div>
          <h2 className="plan-name">Premium</h2>
          <div className="plan-price">
            <span className="amount">49 INR</span>
            <span className="period">/month</span>
          </div>
          <ul className="plan-features" style={{ borderColor: theme.border }}>
            <li>Access to all audio filters</li>
            <li>24/7 Music playback</li>
            <li>Priority support access</li>
            <li>Extended queue limit (350 songs)</li>
            <li>Custom DJ role setup</li>
            <li>High quality audio</li>
          </ul>
          <motion.button 
            className="premium-btn" 
            onClick={() => window.open('https://discord.gg/ExcelBot', '_blank', 'noopener,noreferrer')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              background: theme.primary,
              color: '#FFFFFF'
            }}
          >
            Get Started
          </motion.button>
        </div>

        <div className="premium-plan featured">
          <div className="plan-badge">BEST VALUE</div>
          <h2 className="plan-name">Premium Plus</h2>
          <div className="plan-price">
            <span className="amount">99 INR</span>
            <span className="period">/month</span>
          </div>
          <ul className="plan-features" style={{ borderColor: theme.border }}>
            <li>All Premium features included</li>
            <li>Multiple server support</li>
            <li>Custom bot nickname</li>
            <li>Exclusive Discord role</li>
            <li>Priority feature requests</li>
            <li>Early access to updates</li>
          </ul>
          <button className="premium-btn glow" onClick={() => window.open('https://discord.gg/ExcelBot', '_blank', 'noopener,noreferrer')}>
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Premium;