import React, { useState } from 'react';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';

const DomainForm = ({ onSubmit }) => {
  const [domain, setDomain] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(domain);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <InputField
        type="text"
        placeholder="Enter domain name"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <Button text="Lookup" />
    </form>
  );
};

export default DomainForm;
