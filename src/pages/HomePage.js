import React, { useState } from 'react';
import Form from '../components/molecules/Form';
import DomainTable from '../components/organisms/DomainTable';
import ContactTable from '../components/organisms/ContactTable';
import useWhoisLookup from '../hooks/useWhoIsLookUp';

const HomePage = () => {
  const { domainInfo, contactInfo, error, handleDomainLookup } = useWhoisLookup();
  const [infoType, setInfoType] = useState('domain');
  const handleSubmit = async (domain) => {
    await handleDomainLookup(domain);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-light-background dark:bg-dark-background">
      <div className="border border-dark-background dark:bg-dark-highlight shadow-md rounded-lg p-6 w-full max-w-5xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-light-textPrimary dark:text-dark-textPrimary">
          Whois Domain Lookup
        </h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
          Lookup information about domains and contacts below.
        </p>
        <Form onSubmit={handleSubmit} infoType={infoType} setInfoType={setInfoType} />

        {error && <div className="italic text-red-500 dark:text-red-300 mt-4 text-center">{error}</div>}

        {infoType === 'domain' && domainInfo && <DomainTable domainInfo={domainInfo} />}
        {infoType === 'contact' && contactInfo && <ContactTable contactInfo={contactInfo} />}
        {infoType === 'both' && domainInfo && contactInfo && (
          <>
            <DomainTable domainInfo={domainInfo} />
            <ContactTable contactInfo={contactInfo} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
