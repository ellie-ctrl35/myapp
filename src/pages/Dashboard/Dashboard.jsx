import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ComponentType1 from "./components/DataInfo";
import AppInfo from "./components/AppInfo";
import wallet from "../../assests/wallet-2.svg";
import useradd from "../../assests/user-add.svg";
import chart from "../../assests/chart.svg";
import profile from "../../assests/profile-2user.svg";
import BarChart from "./components/BarChart";
import Footer from "./components/Footer";
import TransactionsTable from "./components/TransactionTables";
import NewUsersChart from "./components/NewUsersChart";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All Transactions");
  const [toogleCharts, setToggleChart] = useState("Transactions");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setToggleChart(tabName === "New Users" ? "NewUsers" : "Transactions");
  };
  return (
    <div className="w-full mx-0 px-0 py-0 bg-white">
      <SearchBar />
      <div className="mt-3 mx-3 rounded-md">
        <h1 className="text-md text-left text-red-500 ">
          <span className="bg-red-100 p-1 rounded-md">Dashboard</span>
        </h1>
      </div>
      <div className="flex flex-row items-center justify-between mx-4 my-5 gap-3">
        <ComponentType1
          title="All Transactions"
          data="$30200"
          icon={wallet}
          iconBgColor="bg-blue-100"
          timePeriod="Today"
        />
        <ComponentType1
          title="New Users"
          data="340"
          icon={useradd}
          iconBgColor="bg-orange-100"
          timePeriod="Weekly"
        />
        <AppInfo
          title="Total Apps"
          data="7"
          icon={chart}
          iconBgColor="bg-green-100"
        />
        <AppInfo
          title="Total Users"
          data="192,345"
          icon={profile}
          iconBgColor="bg-red-100"
        />
      </div>
      <div className="mx-4 border border-gray-400 rounded-md mb-16">
        <ul className="flex flex-row space-x-5 border-gray-200 border-b-2 px-5 pt-3">
          <li
            className={`text-gray-600 pb-4 ${
              activeTab === "All Transactions"
                ? "border-b-2 border-red-500"
                : ""
            }`}
            onClick={() => handleTabClick("All Transactions")}
          >
            <a>All Transactions</a>
          </li>
          <li
            className={`text-gray-600 ${
              activeTab === "New Users" ? "border-b-2 border-red-500" : ""
            }`}
            onClick={() =>
              handleTabClick("New Users")
            }
          >
            <a>New Users</a>
          </li>
          <li
            className={`text-gray-600 ${
              activeTab === "Total Users" ? "border-b-2 border-red-500" : ""
            }`}
            onClick={() => handleTabClick("Total Users")}
          >
            <a>Total Users</a>
          </li>
        </ul>
        {toogleCharts === "Transactions"&& <BarChart/>}
        {toogleCharts === "NewUsers"&&<NewUsersChart/>}
      </div>
      <TransactionsTable />
      <Footer />
    </div>
  );
};

export default Dashboard;
