import React from "react";
import SearchBar from "../Dashboard/components/SearchBar";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";

const Transaction = () => {
  return (
    <div>
      <SearchBar />
      <div className="mt-3 mx-3 rounded-md flex flex-row gap-5 items-center">
        <h1 className="text-md text-left "> Dashboard</h1>
        <RiArrowRightSLine color="#c0c0c0" />
        <h1 className="text-md text-left text-red-500 ">
          <span className="bg-red-300 p-1 rounded-md">Transactions</span>
        </h1>
      </div>

      <div className="mx-4 my-4 border h-80 border-black rounded-md flex flex-col justify-between">
        <h1 className="text-md text-left p-2 border-b border-gray-200"> Review Transactions</h1> 
        <div className="grid grid-cols-3 gap-4 mx-4 mb-2">
          <div>
            <label htmlFor="input1" className="text-gray-400">TransID</label>
            <input type="text" id="input1" placeholder="Enter Transaction ID" className="w-full h-8 
            p-1 border border-gray-200 rounded-sm" />
          </div>
          <div>
            <label htmlFor="input2" className="text-gray-400">Input 2</label>
            <input type="text" id="input2" className="w-full h-8 p-2 border border-gray-200 rounded-sm" />
          </div>
          <div>
            <label htmlFor="input3" className="text-gray-400">Input 3</label>
            <input type="text" id="input3" className="w-full h-8 p-2 border border-gray-200 rounded-sm" />
          </div>
          <div>
            <label htmlFor="input2" className="text-gray-400">Input 4</label>
            <input type="text" id="input4" className="w-full h-8 p-2 border border-gray-200 rounded-sm" />
          </div>
          <div>
            <label htmlFor="input5" className="text-gray-400">Input 5</label>
            <input type="text" id="input5" className="w-full h-8 p-2 border border-gray-200 rounded-sm" />
          </div>
          <div>
            <label htmlFor="input6" className="text-gray-400">Input 6</label>
            <input type="text" id="input6" className="w-full h-8 p-2 border border-gray-200 rounded-sm" />
          </div>
          <div>
            <label htmlFor="input6" className="text-gray-400">Input 7</label>
            <input type="text" id="input6" className="w-full h-8 p-2 border border-gray-200 rounded-sm" />
          </div>
          <div>
            <label htmlFor="input6" className="text-gray-400">Input 8</label>
            <input type="text" id="input6" className="w-full h-8 p-2 border border-gray-200 rounded-sm" />
          </div>
          <div>
            <label htmlFor="input6" className="text-gray-400">Input 9</label>
            <input type="text" id="input6" className="w-full h-8 p-2 border border-gray-200 rounded-sm" />
          </div>
          <div className="flex flex-row items-center">
            <label className="mr-4">Status:   </label>
            <input type="radio" id="radio1" name="radio1" className="checked:bg-red-500 checked:border-transparent" />
            <label htmlFor="radio1" className="ml-2">Paid</label>
            <input type="radio" id="radio2" name="radio1" className="checked:bg-red-500 checked:border-transparent" />
            <label htmlFor="radio2" className="ml-2">Failed</label>
          </div>
          <div className="flex flex-row items-center">
            <label className="mr-4">TransType:</label>
            <input type="radio" id="radio3" name="radio2" className="checked:bg-red-500 checked:border-transparent"/>
            <label htmlFor="radio3" className="ml-2">DEBIT</label>
            <input type="radio" id="radio4" name="radio2" className="checked:bg-red-500 checked:border-transparent"/>
            <label htmlFor="radio4" className="ml-2">CREDIT</label>
            
          </div>
          <div className="flex justify-end mx-4">
          <button className="bg-red-700 text-white p-2 rounded-lg mr-2">Search</button>
          <button className="p-2 w-18 border border-gray-500 rounded-lg">Clear</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Transaction;
