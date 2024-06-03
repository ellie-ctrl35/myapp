import React from "react";
import SearchBar from "../Dashboard/components/SearchBar";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";
import SearchInputs from "./components/SearchInputs";
import TransactionsTable from "./components/TransactionTable";
import transactions from '../Dashboard/components/AllTransaction.json'

const Transaction = () => {
  const Transactions = transactions.transactions
  return (
    <div>
      <SearchBar Transactions={Transactions} />
      <div className="mt-3 mx-3 rounded-md flex flex-row gap-5 items-center">
        <h1 className="text-md text-left "> Dashboard</h1>
        <RiArrowRightSLine color="#c0c0c0" />
        <h1 className="text-md text-left text-red-500 ">
          <span className="bg-red-300 p-1 rounded-md">Transactions</span>
        </h1>
      </div>
      <SearchInputs/>
      <TransactionsTable/>
    </div>
  );
};

export default Transaction;
