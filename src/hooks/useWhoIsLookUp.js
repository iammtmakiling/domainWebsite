import { useState } from 'react';
import { getWhoisData } from '../api/service';

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Helper function to format and truncate hostnames
const formatHostnames = (hostnames) => {
  const hostnameString = hostnames.join(', ');
  return hostnameString.length > 25 ? `${hostnameString.slice(0, 22)}...` : hostnameString;
};

const useWhoisLookup = () => {
  const [domainInfo, setDomainInfo] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleDomainLookup = async (domain) => {
    setError(null);
    try {
      const data = await getWhoisData(domain); // Assuming getWhoisData fetches WHOIS data from API
      if (data.WhoisRecord) {
        const { WhoisRecord } = data;
        setDomainInfo({
          domainName: WhoisRecord.domainName,
          registrarName: WhoisRecord.registrarName,
          registrationDate: formatDate(WhoisRecord.createdDate),
          expirationDate: formatDate(WhoisRecord.expiresDate),
          estimatedDomainAge: WhoisRecord.estimatedDomainAge,
          hostnames: formatHostnames(WhoisRecord.nameServers.hostNames),
        });
        setContactInfo({
          registrantName: WhoisRecord.registrant.name,
          technicalContactName: WhoisRecord.technicalContact.name,
          administrativeContactName: WhoisRecord.administrativeContact.name,
          contactEmail: WhoisRecord.contactEmail,
        });
      } else {
        setError('No WHOIS data found for this domain.');
        setDomainInfo(null);
        setContactInfo(null);
      }
    } catch (error) {
      setError('Error fetching domain info. Please try again later.');
      setDomainInfo(null);
      setContactInfo(null);
    }
  };

  return {
    domainInfo,
    contactInfo,
    error,
    handleDomainLookup,
  };
};

export default useWhoisLookup;
