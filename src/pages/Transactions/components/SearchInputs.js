import React from 'react'

const SearchInputs = () => {
  return (
    <div className="mx-4 my-4 border h-80 border-black rounded-md flex flex-col justify-between">
        <h1 className="text-md text-left p-2 border-b border-gray-200">
          Review Transactions
        </h1>
        <div className="grid grid-cols-3 gap-4 mx-4 mb-2">
          <div>
            <label htmlFor="input1" className="text-gray-400">
              TransID
            </label>
            <input
              type="text"
              id="input1"
              placeholder="Enter Transaction ID"
              className="w-full h-9 
            p-1 border border-gray-200 rounded-sm"
            />
          </div>
          <div>
            <label htmlFor="input2" className="text-gray-400">
              Band Group
            </label>
            <input
              type="text"
              id="input2"
              placeholder="Enter BanGroup"
              className="w-full h-9 p-2 border border-gray-200 rounded-sm"
            />
          </div>
          <div>
            <label htmlFor="input3" className="text-gray-400">
              ClientTransID
            </label>
            <input
              type="text"
              id="input3"
              placeholder="Enter Client Transaction ID"
              className="w-full h-9 p-2 border border-gray-200 rounded-sm"
            />
          </div>
          <div>
            <label htmlFor="input2" className="text-gray-400">
              Username
            </label>
            <input
              type="text"
              id="input4"
              placeholder="Enter Username"
              className="w-full h-9 p-2 border border-gray-200 rounded-sm"
            />
          </div>
          <div>
            <label htmlFor="input5" className="text-gray-400">
              Channel
            </label>
            <input
              type="text"
              id="input5"
              placeholder="Enter Channel"
              className="w-full h-9 p-2 border border-gray-200 rounded-sm"
            />
          </div>
          <div>
            <label htmlFor="input6" className="text-gray-400">
              Client Reference
            </label>
            <input
              type="text"
              id="input6"
              placeholder="Enter Client Reference"
              className="w-full h-9 p-2 border border-gray-200 rounded-sm"
            />
          </div>
          <div>
            <label htmlFor="input6" className="text-gray-400">
              App ID
            </label>
            <input
              type="text"
              id="input6"
              placeholder="Enetr App ID"
              className="w-full h-9 p-2 border border-gray-200 rounded-sm"
            />
          </div>
          <div>
            <label htmlFor="input6" className="text-gray-400">
              Trans Date
            </label>
            <input
              type="text"
              id="input6"
              placeholder="Enter Transaction Date"
              className="w-full h-9 p-2 border border-gray-200 rounded-sm"
            />
          </div>
          <div>
            <label htmlFor="input6" className="text-gray-400">
              Brand TransID
            </label>
            <input
              type="text"
              id="input6"
              placeholder="Enter Brand Transaction ID"
              className="w-full h-9 p-2 border border-gray-200 rounded-sm"
            />
          </div>
          <div className="flex flex-row items-center">
            <label className="mr-4">Status: </label>
            <input
              type="radio"
              id="radio1"
              name="radio1"
              className="checked:bg-red-500 checked:border-transparent"
            />
            <label htmlFor="radio1" className="ml-2">
              Paid
            </label>
            <input
              type="radio"
              id="radio2"
              name="radio1"
              className="checked:bg-red-500 checked:border-transparent"
            />
            <label htmlFor="radio2" className="ml-2">
              Failed
            </label>
          </div>
          <div className="flex flex-row items-center">
            <label className="mr-4">TransType:</label>
            <input
              type="radio"
              id="radio3"
              name="radio2"
              className="checked:bg-red-500 checked:border-transparent"
            />
            <label htmlFor="radio3" className="ml-2">
              DEBIT
            </label>
            <input
              type="radio"
              id="radio4"
              name="radio2"
              className="checked:bg-red-500 checked:border-transparent"
            />
            <label htmlFor="radio4" className="ml-2">
              CREDIT
            </label>
          </div>
          <div className="flex justify-end mx-0">
            <button className="bg-red-700 text-white p-2 w-24 rounded-full mr-2">
              Search
            </button>
            <button className="p-2 w-24 border border-gray-500 rounded-full">
              Clear
            </button>
          </div>
        </div>
      </div>
  )
}

export default SearchInputs