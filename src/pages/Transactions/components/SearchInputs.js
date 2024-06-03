import {useState} from 'react'


const SearchInputs = ({Transactions}) => {
  const [searchQuery,setSearchQuery]=useState("");

  // const filteredReports = Transactions.filter((report) =>
  // report.EquipmentName.toLowerCase().includes(searchQuery.toLowerCase())
  // );
// console.log(filteredReports)
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
            value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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