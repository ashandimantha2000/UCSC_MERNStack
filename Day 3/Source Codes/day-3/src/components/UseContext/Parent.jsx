import React, { createContext, useState } from 'react';

// Create the context
export const UseContext = createContext();

// Provider component
export const Parent = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default theme is light

  // Toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <UseContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </UseContext.Provider>
  );
};


