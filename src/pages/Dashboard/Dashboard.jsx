import React from "react";
import SearchBar from "./components/SearchBar";
import ComponentType1 from './components/DataInfo';
import AppInfo from './components/AppInfo';

const Dashboard = () => {
  return (
    <div className="w-full mx-0 px-0 py-0 bg-white">
      <SearchBar />
      <div className="mt-10 mx-3 rounded-md">
        <h1 className="text-md text-left text-red-500 ">
          <span className="bg-red-300 p-1 rounded-md">Dashboard</span>
        </h1>
      </div>
      <div className=" flex flex-row items-center justify-between mx-4 my-5 gap-3">
            <ComponentType1
                title="All Transactions"
                data="$30200"
                icon="path/to/transaction-icon.png"
                iconBgColor="bg-blue-100"
                timePeriod="Today"
            />
            <ComponentType1
                title="New Users"
                data="340"
                icon="path/to/user-icon.png"
                iconBgColor="bg-orange-100"
                timePeriod="Weekly"
            />
            <AppInfo
                title="Total Apps"
                data="7"
                icon="path/to/app-icon.png"
                iconBgColor="bg-green-100"
            />
            <AppInfo
                title="Total Users"
                data="192,345"
                icon="path/to/total-users-icon.png"
                iconBgColor="bg-red-100"
            />
        </div>
    </div>
  );
};

export default Dashboard;
