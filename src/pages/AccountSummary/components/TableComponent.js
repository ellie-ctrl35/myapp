import React from 'react';

const data = [
  { balance: 45, accountID: 'Accountant', email: 'Tokyo', name: "Airi Satou", phoneNumber: '2008/11/28' },
  { balance: 22, accountID: 'Junior Technical Author', email: 'San Francisco', name: 'Ashton Cox', phoneNumber: '2009/01/12' },
  { balance: 24, accountID: 'Software Engineer', email: 'London', name: 'Bradley Greer', phoneNumber: '2012/10/13' },
  { balance: 61, accountID: 'Integration Specialist', email: 'New York', name: 'Brielle Williamson', phoneNumber: '2012/12/02' },
  { balance: 'Cedric Kelly', accountID: 'Senior Javascript Developer', email: 'Edinburgh', name: 40, phoneNumber: '2012/03/29' },
  { balance: 'Charde Marshall', accountID: 'Regional Director', email: 'San Francisco', name: 25, phoneNumber: '2008/10/16' },
  { balance: 'Colleen Hurst', accountID: 'Javascript Developer', email: 'San Francisco', name: 26, phoneNumber: '2009/09/15' },
  { balance: 'Dai Rios', accountID: 'Personnel Lead', email: 'Tokyo', name: 29, phoneNumber: '2012/09/26' },
  { balance: 'Garrett Winters', accountID: 'Accountant', email: 'New York', name: 26, phoneNumber: '2011/07/25' }
];

const TableComponent = () => {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.balance}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.accountID}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
