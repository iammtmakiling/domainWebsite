import React from 'react';

const Button = ({ type, disabled, loading, onClick, children }) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg flex md:justify-center items-center w-full sm:w-auto ${
        disabled || loading
          ? 'bg-light-highlight border border-dark-background cursor-not-allowed'
          : 'bg-dark-highlight dark:bg-light-highlight text-white dark:text-dark-background hover:bg-dark-background'
      } transition-colors duration-200`}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-white mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="4" className="opacity-25"></circle>
          <path
            fill="black"
            d="M4 12a8 8 0 018-8v8H4z"
            className="opacity-75"
          ></path>
        </svg>
      ) : (
        <>
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            ></path>
          </svg>
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
