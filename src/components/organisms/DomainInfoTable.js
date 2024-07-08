import React from 'react';

const DomainInfoTable = ({ domainInfo }) => {
  if (!domainInfo) return null;

  return (
    <table className="table-auto border-collapse border border-gray-400 mt-4">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Field</th>
          <th className="border border-gray-300 p-2">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">Domain Name</td>
          <td className="border border-gray-300 p-2">{domainInfo.domainName}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Registrar</td>
          <td className="border border-gray-300 p-2">{domainInfo.registrarName}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Registration Date</td>
          <td className="border border-gray-300 p-2">{domainInfo.registrationDate}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Expiration Date</td>
          <td className="border border-gray-300 p-2">{domainInfo.expirationDate}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Estimated Domain Age</td>
          <td className="border border-gray-300 p-2">{domainInfo.estimatedDomainAge}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Hostnames</td>
          <td className="border border-gray-300 p-2">{domainInfo.hostnames}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DomainInfoTable;
