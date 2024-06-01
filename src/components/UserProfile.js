import React from 'react';
import User from '../assests/User.svg'

const UserProfile = () => {
  return (
    <div className="flex items-center space-x-5 rounded-md p-3 bg-gray-200 mx-2">
      <div className="w-12 h-12 bg-red-700 rounded-full ">
        <img
          className="w-full h-full "
          src={User} // Replace with the path to your profile image
          alt="User Profile"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Emmanuel</h3>
        <p className="text-sm text-gray-500">Administrator</p>
      </div>
    </div>
  );
};

export default UserProfile;