import React from "react";
import transactions from './Transactions.json'

const TransactionsTable = () => {
  const Transactions = transactions.transactions
  return (
    <div className="overflow-x-auto mb-24 mx-4 border-gray-200 border  rounded-md">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-md text-black text-left ml-4 my-3">
          Transactions
        </h1>
        <h1 className="text-red-600 mr-4 text-sm">View All</h1>
      </div>
      <table className="min-w-full bg-white border">
        <thead className="bg-red-100 border-b">
          <tr className="bg-gray-300 ">
            <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              TransID
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              BrandTransID
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Username
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              App Name
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              BrandGroup
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                {transaction.transId}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                {transaction.brandTransId}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                {transaction.username}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                {transaction.appName}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                {transaction.brandGroup}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
