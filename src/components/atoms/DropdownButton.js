import React from 'react';

const DropdownButton = ({ infoType, setInfoType, toggleDropdown, dropdownOpen }) => {
  return (
    <div className="relative w-full border border-dark-background dark:border-none rounded-lg sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none flex items-center justify-between w-full dark:text-white"
      >
        {infoType === 'domain' && 'Domain Info'}
        {infoType === 'contact' && 'Contact Info'}
        {infoType === 'both' && 'Both'}
        <svg className="ml-2 w-4 h-4 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <button
            onClick={() => { setInfoType('domain'); toggleDropdown(); }}
            className={`w-full px-4 py-2 text-left ${infoType === 'domain' ? 'bg-dark-highlight text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white'}`}
          >
            Domain Info
          </button>
          <button
            onClick={() => { setInfoType('contact'); toggleDropdown(); }}
            className={`w-full px-4 py-2 text-left ${infoType === 'contact' ? 'bg-dark-highlight text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white'}`}
          >
            Contact Info
          </button>
          <button
            onClick={() => { setInfoType('both'); toggleDropdown(); }}
            className={`w-full px-4 py-2 text-left ${infoType === 'both' ? 'bg-dark-highlight  text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white'}`}
          >
            Both
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
