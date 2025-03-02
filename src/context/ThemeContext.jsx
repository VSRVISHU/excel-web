import React, { createContext, useEffect, useState } from 'react';

// Create the theme context
export const ThemeContext = createContext();

// Define theme colors
const themes = {
  dark: {
    primary: '#5865F2', // Discord blue
    secondary: '#7289DA', // Lighter blue
    accent: '#EB459E', // Pink accent
    background: '#121212', // Dark background
    backgroundSecondary: '#1A1A1A', // Slightly lighter background
    backgroundTertiary: '#2B2B2B', // Card background
    text: '#FFFFFF',
    textSecondary: '#A0A0A0',
    border: '#3F3F3F',
    success: '#57F287', // Green
    warning: '#FEE75C', // Yellow
    error: '#ED4245', // Red
    gradients: {
      primary: 'linear-gradient(45deg, #5865F2, #7289DA)',
      background: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)',
      card: 'linear-gradient(135deg, #1A1A1A 0%, #2B2B2B 100%)'
    }
  },
  light: {
    primary: '#5865F2', // Discord blue
    secondary: '#7289DA', // Lighter blue
    accent: '#EB459E', // Pink accent
    background: '#F5F5F5', // Light background
    backgroundSecondary: '#FFFFFF', // White background
    backgroundTertiary: '#EAEAEA', // Card background
    text: '#121212',
    textSecondary: '#555555',
    border: '#DDDDDD',
    success: '#57F287', // Green
    warning: '#FEE75C', // Yellow
    error: '#ED4245', // Red
    gradients: {
      primary: 'linear-gradient(45deg, #5865F2, #7289DA)',
      background: 'linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 100%)',
      card: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)'
    }
  }
};

export const ThemeProvider = ({ children }) => {
  // Function to get system theme preference
  const getSystemTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Check if user has a saved theme preference or use system theme
  const getUserThemePreference = () => {
    const savedTheme = localStorage.getItem('theme');
    // If theme is explicitly set to 'system' or not set at all, use system preference
    if (savedTheme === 'system' || !savedTheme) {
      return getSystemTheme();
    }
    return savedTheme; // Otherwise use saved preference
  };

  const [themeMode, setThemeMode] = useState(getUserThemePreference());
  const [systemTheme, setSystemTheme] = useState(getSystemTheme());
  const [themePreference, setThemePreference] = useState(localStorage.getItem('theme') || 'system');
  const [currentTheme, setCurrentTheme] = useState(themes[getUserThemePreference()]);

  // Toggle between light, dark, and system themes
  const toggleTheme = () => {
    let newPreference;
    if (themePreference === 'light') {
      newPreference = 'dark';
    } else if (themePreference === 'dark') {
      newPreference = 'system';
    } else {
      newPreference = 'light';
    }
    
    setThemePreference(newPreference);
    localStorage.setItem('theme', newPreference);
    
    // Set the actual theme based on preference
    if (newPreference === 'system') {
      setThemeMode(systemTheme);
    } else {
      setThemeMode(newPreference);
    }
  };

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      const newSystemTheme = e.matches ? 'dark' : 'light';
      setSystemTheme(newSystemTheme);
      
      // Only update theme if preference is set to system
      if (themePreference === 'system') {
        setThemeMode(newSystemTheme);
      }
    };
    
    // Add event listener
    mediaQuery.addEventListener('change', handleChange);
    
    // Clean up
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themePreference]);

  // Update theme when themeMode changes
  useEffect(() => {
    setCurrentTheme(themes[themeMode]);
    document.body.style.backgroundColor = themes[themeMode].background;
    document.body.style.color = themes[themeMode].text;
  }, [themeMode]);
  
  // Update theme when system theme changes and preference is 'system'
  useEffect(() => {
    if (themePreference === 'system') {
      setThemeMode(systemTheme);
    }
  }, [systemTheme, themePreference]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};