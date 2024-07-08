import React from 'react';

const ContactInfoTable = ({ contactInfo }) => {
  if (!contactInfo) return null;

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
          <td className="border border-gray-300 p-2">Registrant Name</td>
          <td className="border border-gray-300 p-2">{contactInfo.registrantName}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Technical Contact Name</td>
          <td className="border border-gray-300 p-2">{contactInfo.technicalContactName}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Administrative Contact Name</td>
          <td className="border border-gray-300 p-2">{contactInfo.administrativeContactName}</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Contact Email</td>
          <td className="border border-gray-300 p-2">{contactInfo.contactEmail}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ContactInfoTable;
