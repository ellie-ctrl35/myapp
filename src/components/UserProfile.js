import React from 'react';
import User from '../assests/User.svg';
import { RiMenu5Line } from "@react-icons/all-files/ri/RiMenu5Line";

const UserProfile = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center space-x-1 rounded-md p-3 bg-gray-200 mx-1">
      <div className="w-12 h-12 bg-red-700 rounded-full">
        <img
          className="w-full h-full"
          src={User} // Replace with the path to your profile image
          alt="User Profile"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">Emmanuel</h3>
        <p className="text-sm text-gray-500">Administrator</p>
      </div>
      <RiMenu5Line onClick={toggleSidebar} className="cursor-pointer" color="#5B6B79" />
    </div>
  );
};

export default UserProfile;
