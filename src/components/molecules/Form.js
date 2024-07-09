import React, { useState } from 'react';
import DropdownButton from '../atoms/DropdownButton';
import Button from '../atoms/Button'; // Import the Button component
import useResetData from '../../hooks/useResetData'; // Import the useResetData hook

const Form = ({ onSubmit, infoType, setInfoType }) => {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Use the useResetData hook to handle resetting
  const { resetting, handleReset } = useResetData(async () => {
    // Reset form state
    setDomain('');
    // Call reset function from parent component if available
    if (typeof onSubmit === 'function') {
      await onSubmit(''); // Reset data as needed, for example, reset domainInfo and contactInfo state
    }
  });

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
        className="dark:bg-white color-dark-background p-2 border border-dark-background rounded-lg w-full focus:outline-none"
      />
      <Button
        type="submit"
        disabled={!domain || loading}
        loading={loading}
      >
        Search
      </Button>
      <DropdownButton
        infoType={infoType}
        setInfoType={setInfoType}
        toggleDropdown={toggleDropdown}
        dropdownOpen={dropdownOpen}
      />
      <button
        type="button"
        onClick={handleReset}
        disabled={resetting || loading}
        className="p-2 rounded-full focus:outline-none"
      >
        {resetting ? (
          <svg className="animate-spin h-5 w-5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        )}
      </button>
    </form>
  );
};

export default Form;
