import React, { useContext } from 'react';
import { UseContext } from './Parent';

export default function ChildComponent() {
  const { theme, toggleTheme } = useContext(UseContext);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: theme === 'light' ? '#fff' : '#000', 
      color: theme === 'light' ? '#000' : '#fff', 
      fontSize: theme === 'light' ? '36px' : '24px',
    }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}