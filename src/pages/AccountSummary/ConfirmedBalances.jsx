import React from 'react'
import SearchBar from './components/SearchBar'
import TableComponent from './components/TableComponent'

const ConfirmedBalances = () => {
  return (
    <div className='w-full flex flex-col px-4 pt-4'>
<SearchBar />
<TableComponent />
    </div>
  )
}

export default ConfirmedBalances