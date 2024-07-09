import React, { useState } from 'react';
import DropdownButton from '../atoms/DropdownButton';

const Form = ({ onSubmit, infoType, setInfoType }) => {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!domain) return;
    setLoading(true);
    await onSubmit(domain);
    setLoading(false);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="Enter domain"
        className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none"
      />
      <button
        type="submit"
        disabled={!domain || loading}
        className={`px-4 py-2 rounded-lg flex justify-center items-center w-full sm:w-auto ${(!domain || loading) ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'} transition-colors duration-200`}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
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
            Search
          </>
        )}
      </button>
      <DropdownButton
        infoType={infoType}
        setInfoType={setInfoType}
        toggleDropdown={toggleDropdown}
        dropdownOpen={dropdownOpen}
      />
    </form>
  );
};

export default Form;
