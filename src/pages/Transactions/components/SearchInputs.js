import React from 'react'

const SearchInputs = () => {
  return (
    <div className="mx-4 my-4 border  border-black rounded-md flex flex-col justify-between">
        <h1 className="text-md text-left p-2 border-b border-gray-200">
          Review Transactions
        </h1>
        <div className="flex flex-row gap-4 mx-4 my-2 p-4">
          <div className='w-full'>
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
          <div className='w-full'>
            <label htmlFor="input2" className="text-gray-400">
              Date
            </label>
            <input
              type="date"
              id="input2"
              placeholder="Enter BanGroup"
              className="w-full h-9 p-2 border border-gray-200 rounded-sm"
            />
          </div>
        </div>
      </div>
  )
}

export default SearchInputs