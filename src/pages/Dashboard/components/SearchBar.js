import React from "react";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import sun from "../../../assests/sun.svg";
import home from "../../../assests/home.svg";
import icon from "../../../assests/icon.svg";
import notification from "../../../assests/notification.svg";
import User from "../../../assests/User.svg";

const SearchBar = () => {
  return (
    <div className="w-full bg-white h-16 flex items-center justify-between">
      <div className="flex items-center border h-10 w-64 border-gray-400 mx-4 rounded-md focus-within:border-red-500">
        <FiSearch className="text-gray-500 ml-2" size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="h-full px-2 bg-white outline-none"
        />
      </div>

      <div className="flex items-center mx-10">
        <img src={sun} alt="sun" className="h-5 w-5 mx-2" />
        <img src={home} alt="home" className="h-5 w-5 mx-2" />
        <img src={icon} alt="icon" className="h-5 w-5 mx-2" />
        <img src={notification} alt="notification" className="h-5 w-5 mx-2" />
        <div className="h-8 w-8 mx-2 bg-red-500 rounded-full  items-center">
          <img src={User} alt="User" className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
