import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-200 p-2 rounded"
    >
      {text}
    </button>
  );
};

export default Button;
