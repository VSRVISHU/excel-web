import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaRobot, FaMusic, FaHeadphones, FaPlay } from 'react-icons/fa';
import { MdMusicNote, MdQueue, MdPlaylistAdd, MdVolumeUp } from 'react-icons/md';

const FloatingIcons = () => {
  const icons = [
    { Icon: FaDiscord, delay: 0 },
    { Icon: FaRobot, delay: 1 },
    { Icon: FaMusic, delay: 2 },
    { Icon: MdMusicNote, delay: 0.5 },
    { Icon: MdQueue, delay: 1.5 },
    { Icon: FaHeadphones, delay: 2.5 },
    { Icon: FaPlay, delay: 0.8 },
    { Icon: MdPlaylistAdd, delay: 1.2 },
    { Icon: MdVolumeUp, delay: 1.8 }
  ];

  return (
    <div className="floating-icons" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      {icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            fontSize: '2rem',
            opacity: 0.15,
            left: `${Math.random() * 100}%`,
            top: `-50px`
          }}
          animate={{
            y: ['0vh', '120vh'],
            rotate: [0, 360],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: Math.random() * 3 + 5, // Reduced duration for faster animation
            delay: delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: 'linear'
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;