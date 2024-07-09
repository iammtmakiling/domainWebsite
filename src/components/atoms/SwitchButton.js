import React, { useState, useEffect } from 'react';

const SwitchButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center justify-center">
      <span className="mr-2 text-gray-900 dark:text-gray-100">Light</span>
      <div
        onClick={toggleDarkMode}
        className={`relative w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          darkMode ? 'justify-end' : 'justify-start'
        }`}
      >
        <div
          className={`absolute w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md transition-transform duration-300 ${
            darkMode ? 'transform translate-x-full' : 'transform translate-x-0'
          }`}
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        ></div>
      </div>
      <span className="ml-2 text-gray-900 dark:text-gray-100">Dark</span>
    </div>
  );
};

export default SwitchButton;
