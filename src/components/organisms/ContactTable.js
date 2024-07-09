import React from 'react';

const ContactTable = ({ contactInfo }) => {
  return (
    <div className="overflow-x-auto my-4">
      <h3 className="text-xl font-bold mb-4">Contact Information</h3>
      <table className="table-auto w-full lg:min-w-max hidden md:table border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-700 text-white rounded-t-lg">
            <th className="font-semibold text-left p-2 min-w-[200px]">Registrant Name</th>
            <th className="font-semibold text-left p-2 min-w-[200px]">Administrative Contact</th>
            <th className="font-semibold text-left p-2 min-w-[200px]">Technical Contact</th>
            <th className="font-semibold text-left p-2 min-w-[200px]">Contact Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">{contactInfo.registrantName}</td>
            <td className="p-2">{contactInfo.administrativeContactName}</td>
            <td className="p-2">{contactInfo.technicalContactName}</td>
            <td className="p-2">{contactInfo.contactEmail}</td>
          </tr>
        </tbody>
      </table>

      <div className="md:hidden">
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold text-gray-700">Registrant Name:</span>
          <span>{contactInfo.registrantName}</span>
        </div>
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold text-gray-700">Administrative Contact:</span>
          <span>{contactInfo.administrativeContactName}</span>
        </div>
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold text-gray-700">Technical Contact:</span>
          <span>{contactInfo.technicalContactName}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="font-semibold text-gray-700">Contact Email:</span>
          <span>{contactInfo.contactEmail}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactTable;
