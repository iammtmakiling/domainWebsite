import React from 'react';

const ContactTable = ({ contactInfo }) => {
  return (
    <div className="overflow-x-auto my-4">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Contact Information</h3>
      <table className="table-auto w-full lg:min-w-max hidden md:table border border-gray-300 dark:border-gray-700 rounded-lg">
        <thead>
          <tr className="bg-dark-background text-white rounded-t-lg">
            <th className="font-semibold text-left p-2 min-w-[200px]">Registrant Name</th>
            <th className="font-semibold text-left p-2 min-w-[200px]">Administrative Contact</th>
            <th className="font-semibold text-left p-2 min-w-[200px]">Technical Contact</th>
            <th className="font-semibold text-left p-2 min-w-[200px]">Contact Email</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-900 dark:text-gray-100">
            <td className="p-2">{contactInfo.registrantName}</td>
            <td className="p-2">{contactInfo.administrativeContactName}</td>
            <td className="p-2">{contactInfo.technicalContactName}</td>
            <td className="p-2">{contactInfo.contactEmail}</td>
          </tr>
        </tbody>
      </table>

      <div className="md:hidden">
        <div className="flex justify-between border-b py-2 text-gray-900 dark:text-gray-100">
          <span className="font-semibold">Registrant Name:</span>
          <span>{contactInfo.registrantName}</span>
        </div>
        <div className="flex justify-between border-b py-2 text-gray-900 dark:text-gray-100">
          <span className="font-semibold">Administrative Contact:</span>
          <span>{contactInfo.administrativeContactName}</span>
        </div>
        <div className="flex justify-between border-b py-2 text-gray-900 dark:text-gray-100">
          <span className="font-semibold">Technical Contact:</span>
          <span>{contactInfo.technicalContactName}</span>
        </div>
        <div className="flex justify-between py-2 text-gray-900 dark:text-gray-100">
          <span className="font-semibold">Contact Email:</span>
          <span>{contactInfo.contactEmail}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactTable;
