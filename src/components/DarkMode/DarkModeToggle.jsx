
import React from 'react';
import { useTheme } from './ThemeProvider';


// tried adding a dark mode , unforturnatley i didnt have enought time to finish this 
const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
