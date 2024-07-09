import React from 'react';

const DomainTable = ({ domainInfo }) => {
  return (
    <div className="overflow-x-auto my-4">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Domain Information</h3>
      <table className="table-auto w-full lg:min-w-max hidden md:table border border-gray-300 dark:border-gray-700 rounded-lg">
        <thead>
          <tr className="bg-gray-700 text-white rounded-t-lg">
            <th className="font-semibold text-left p-2 min-w-[200px]">Domain Name</th>
            <th className="font-semibold text-left p-2 min-w-[200px]">Registrar</th>
            <th className="font-semibold text-left p-2 min-w-[200px]">Created Date</th>
            <th className="font-semibold text-left p-2 min-w-[200px]">Expires Date</th>
            <th className="font-semibold text-left p-2 min-w-[200px]">Estimated Domain Age</th>
            <th className="font-semibold text-left p-2 min-w-[200px]">Host Names</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-900 dark:text-gray-100">
            <td className="p-2">{domainInfo.domainName}</td>
            <td className="p-2">{domainInfo.registrarName}</td>
            <td className="p-2">{domainInfo.registrationDate}</td>
            <td className="p-2">{domainInfo.expirationDate}</td>
            <td className="p-2">{domainInfo.estimatedDomainAge}</td>
            <td className="p-2">{domainInfo.hostnames}</td>
          </tr>
        </tbody>
      </table>

      <div className="md:hidden">
        <div className="flex justify-between border-b py-2 text-gray-900 dark:text-gray-100">
          <span className="font-semibold">Domain Name:</span>
          <span>{domainInfo.domainName}</span>
        </div>
        <div className="flex justify-between border-b py-2 text-gray-900 dark:text-gray-100">
          <span className="font-semibold">Registrar:</span>
          <span>{domainInfo.registrarName}</span>
        </div>
        <div className="flex justify-between border-b py-2 text-gray-900 dark:text-gray-100">
          <span className="font-semibold">Created Date:</span>
          <span>{domainInfo.registrationDate}</span>
        </div>
        <div className="flex justify-between border-b py-2 text-gray-900 dark:text-gray-100">
          <span className="font-semibold">Expires Date:</span>
          <span>{domainInfo.expirationDate}</span>
        </div>
        <div className="flex justify-between border-b py-2 text-gray-900 dark:text-gray-100">
          <span className="font-semibold">Estimated Domain Age:</span>
          <span>{domainInfo.estimatedDomainAge}</span>
        </div>
        <div className="flex justify-between py-2 text-gray-900 dark:text-gray-100">
          <span className="font-semibold">Host Names:</span>
          <span>{domainInfo.hostnames}</span>
        </div>
      </div>
    </div>
  );
};

export default DomainTable;
