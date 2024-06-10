import React, { useState } from 'react';
import { Route, Routes, useNavigate, useMatch } from 'react-router-dom';
import SideNav from './SideNav';
import Confirmations from '../pages/Transactions/Confirmations';
import AddTransactions from '../pages/Transactions/AddTransactions';

const Layout = () => {
  // const { path } = useMatch();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('component1');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    // navigate(`${path}/${tab}`);
  };

  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex flex-col flex-grow">
        <div className="bg-gray-200 p-4">
          <div className="flex">
            <button
              className={`px-4 py-2 rounded-md ${
                selectedTab === 'component1' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              } mr-4`}
              onClick={() => handleTabChange('component1')}
            >
              Component 1
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedTab === 'component2' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => handleTabChange('component2')}
            >
              Component 2
            </button>
          </div>
        </div>
        <div className="flex-grow bg-white p-4">
          {/* <Routes>
            <Route path={`${path}/component1`} element={<Confirmations />} />
            <Route path={`${path}/component2`} element={<AddTransactions />} />
          </Routes> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
