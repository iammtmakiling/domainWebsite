import React, { useState } from 'react';
import DropdownButton from '../atoms/DropdownButton';
import Button from '../atoms/Button'; // Import the Button component

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
        className="p-2 border border-dark-background rounded-lg w-full focus:outline-none"
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
    </form>
  );
};

export default Form;
