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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
          Whois Domain Lookup
        </h1>
        <Form onSubmit={handleSubmit} infoType={infoType} setInfoType={setInfoType} />

        {error && <div className="text-red-500 dark:text-red-300 mt-4 text-center">{error}</div>}

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
