import React, { useState } from 'react';
import DomainForm from '../components/molecules/DomainForm';
import DomainInfoTable from '../components/organisms/DomainInfoTable';
import ContactInfoTable from '../components/organisms/ContactInfoTable';
import { getWhoisData } from '../api/service';

const HomePage = () => {
  const [domainInfo, setDomainInfo] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleDomainLookup = async (domain) => {
    setError(null);
    try {
      console.log(domain);
      const data = await getWhoisData(domain);
      console.log(data);
      if (data.WhoisRecord) {
        setDomainInfo(data.WhoisRecord);
        setContactInfo(data.WhoisRecord.contact);
      } else {
        setError('No WHOIS data found for this domain.');
      }
    } catch (error) {
      console.error('Error fetching domain info:', error);
      setError('Error fetching domain info. Please try again later.');
      setDomainInfo(null);
      setContactInfo(null);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Whois Domain Lookup</h1>
      <DomainForm onSubmit={handleDomainLookup} />
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {domainInfo && <DomainInfoTable domainInfo={domainInfo} />}
      {contactInfo && <ContactInfoTable contactInfo={contactInfo} />}
    </div>
  );
};

export default HomePage;
