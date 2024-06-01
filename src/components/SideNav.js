import React, { useState } from "react";
import { NavLink,useLocation } from "react-router-dom";
import { RiHome6Fill } from "@react-icons/all-files/ri/RiHome6Fill";
import { AiOutlineDollar } from "@react-icons/all-files/ai/AiOutlineDollar";
import { HiChartSquareBar } from "@react-icons/all-files/hi/HiChartSquareBar";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { BsGear } from "@react-icons/all-files/bs/BsGear";
import { RiMenu5Line } from "@react-icons/all-files/ri/RiMenu5Line";
import redde from "../assests/redde.svg";
import UserProfile from "./UserProfile";

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex flex-col h-screen p-1 bg-white text-black border-r-2 border-gray-300 border-dotted ${isCollapsed ? 'w-20' : 'w-60'}`}>
      <div className="space-y-0">
        <div onClick={toggleSidebar} className="flex items-center justify-center p-0">
          <img src={redde} alt="Logo" className="w-14 h-14" />
        </div>
        {!isCollapsed && (
          <>
            <UserProfile toggleSidebar={toggleSidebar} />
            <h2 className="text-xs font-semibold text-gray-800 text-left ml-4 mt-4 opacity-50 mx-2">
              NAVIGATION
            </h2>
          </>
        )}
        <div className="flex-1 mx-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-white mx-2"
                }
              >
                <RiHome6Fill color={location.pathname === "/dashboard" ? "#930006" : "#5B6B79"}  className="w-4 h-4" />
                {!isCollapsed && <span>Dashboard</span>}
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to="/transactions"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <AiOutlineDollar color={location.pathname === "/transactions" ? "#930006" : "#5B6B79"}  className="w-4 h-4" />
                {!isCollapsed && <span>Transactions</span>}
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to="/charges"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <HiChartSquareBar color="#5B6B79" className="w-4 h-4" />
                {!isCollapsed && <span>Charges</span>}
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to="/merchant"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <FaUser color="#5B6B79" className="w-4 h-4" />
                {!isCollapsed && <span>Merchant</span>}
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to="/actions"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <BsGear color="#5B6B79" className="w-4 h-4" />
                {!isCollapsed && <span>My Actions</span>}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
