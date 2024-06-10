import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiHome6Fill } from "@react-icons/all-files/ri/RiHome6Fill";
import { AiOutlineDollar } from "@react-icons/all-files/ai/AiOutlineDollar";
import { HiChartSquareBar } from "@react-icons/all-files/hi/HiChartSquareBar";
import { HiUsers } from "@react-icons/all-files/hi/HiUsers";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { BsGear } from "@react-icons/all-files/bs/BsGear";
import redde from "../assests/redde.svg";
import UserProfile from "./UserProfile";

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isTransactionsOpen, setTransactionsOpen] = useState(false);
  const [isSubTransactionsOpen, setSubTransactionsOpen] = useState(false);
  const [isTrans, setSubTrans] = useState(false);
  const [isRedde, setRedde] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex flex-col h-screen p-1 bg-white text-black border-r-2 border-gray-300 border-dotted ${
        isCollapsed ? "w-20" : "w-60"
      } transition-width duration-300`}
    >
      <div className="space-y-0">
        <div
          style={{ marginTop: "0%" }}
          onClick={toggleSidebar}
          className="flex items-center justify-center p-0 cursor-pointer"
        >
          <img src={redde} alt="Logo" className="w-14 h-14" />
        </div>
        {!isCollapsed ? (
          <>
            <UserProfile toggleSidebar={toggleSidebar} />
            <h2
              style={{ marginTop: "1.8rem" }}
              className="text-xs font-semibold text-gray-800 text-left ml-4 mt-4 opacity-50 mx-2"
            >
              NAVIGATION
            </h2>
          </>
        ) : (
          <div style={{ height: "2%", width: "100%" }}></div>
        )}
        <div className="flex-1 mx-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <RiHome6Fill
                  color={
                    location.pathname === "/dashboard" ? "#930006" : "#5B6B79"
                  }
                  className="w-4 h-4"
                />
                {!isCollapsed && <span>Dashboard</span>}
              </NavLink>
            </li>
            <li className="rounded-sm">
              <div
                onClick={() => setTransactionsOpen(!isTransactionsOpen)}
                className="flex items-center p-2 space-x-3 rounded-md cursor-pointer hover:bg-red-100 mx-2"
              >
                <AiOutlineDollar
                  color={
                    location.pathname === "/transactions"
                      ? "#930006"
                      : "#5B6B79"
                  }
                  className="w-4 h-4"
                />
                {!isCollapsed && <span>Account Summary</span>}
                {isTransactionsOpen ? (
                  <IoIosArrowDown className="w-4 h-4 ml-auto" />
                ) : (
                  <IoIosArrowForward className="w-4 h-4 ml-auto" />
                )}
              </div>
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  isTransactionsOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="pl-8 space-y-1">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/confirmed"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Confirmed Balances
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/unconfirmed"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      UnConfirmed Balances
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/pending"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Pending Settlements
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/balance"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Balance Transactions
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="rounded-sm">
              <div
                onClick={() => setSubTransactionsOpen(!isSubTransactionsOpen)}
                className="flex items-center p-2 space-x-3 rounded-md cursor-pointer hover:bg-red-100 mx-2"
              >
                <AiOutlineDollar
                  color={
                    location.pathname === "/transactions"
                      ? "#930006"
                      : "#5B6B79"
                  }
                  className="w-4 h-4"
                />
                {!isCollapsed && <span>Transactions</span>}
                {isSubTransactionsOpen ? (
                  <IoIosArrowDown className="w-4 h-4 ml-auto" />
                ) : (
                  <IoIosArrowForward className="w-4 h-4 ml-auto" />
                )}
              </div>
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  isSubTransactionsOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="pl-8 space-y-1">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Sub Transaction 1
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/confirmed"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Sub Transaction 2
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/unconfirmed"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Sub Transaction 3
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="rounded-sm">
              <NavLink
                to="/charts"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <HiChartSquareBar
                  color={
                    location.pathname === "/charts" ? "#930006" : "#5B6B79"
                  }
                  className="w-4 h-4"
                />
                {!isCollapsed && <span>Charges</span>}
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <FaUser
                  color={location.pathname === "/users" ? "#930006" : "#5B6B79"}
                  className="w-4 h-4"
                />
                {!isCollapsed && <span>Merchants</span>}
              </NavLink>
            </li>
            <li className="rounded-sm">
              <div
                onClick={() => setSubTrans(!isTrans)}
                className="flex items-center p-2 space-x-3 rounded-md cursor-pointer hover:bg-red-100 mx-2"
              >
                <HiUsers
                  color={
                    location.pathname === "/transactions"
                      ? "#930006"
                      : "#5B6B79"
                  }
                  className="w-4 h-4"
                />
                {!isCollapsed && <span>Users & Profile</span>}
                {!isTrans ? (
                  <IoIosArrowDown className="w-4 h-4 ml-auto" />
                ) : (
                  <IoIosArrowForward className="w-4 h-4 ml-auto" />
                )}
              </div>
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  !isTrans ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="pl-8 space-y-1">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/sub1"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Sub Transaction 1
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/sub2"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Sub Transaction 2
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="rounded-sm">
              <div
                onClick={() => setRedde(!isRedde)}
                className="flex items-center p-2 space-x-3 rounded-md cursor-pointer hover:bg-red-100 mx-2"
              >
                <BsGear
                  color={
                    location.pathname === "/transactions"
                      ? "#930006"
                      : "#5B6B79"
                  }
                  className="w-4 h-4"
                />
                {!isCollapsed && <span>Redde Actions</span>}
                {isRedde ? (
                  <IoIosArrowDown className="w-4 h-4 ml-auto" />
                ) : (
                  <IoIosArrowForward className="w-4 h-4 ml-auto" />
                )}
              </div>
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  isRedde ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="pl-8 space-y-1">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/sub1"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Sub Transaction 1
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/sub2"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Sub Transaction 2
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/sub3"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Sub Transaction 3
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2"></span>
                    <NavLink
                      to="/transactions/sub3"
                      className={({ isActive }) =>
                        isActive ? "text-red-700" : "text-red-700"
                      }
                    >
                      Sub Transaction 3
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="rounded-sm">
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <BsGear
                  color={
                    location.pathname === "/settings" ? "#930006" : "#5B6B79"
                  }
                  className="w-4 h-4"
                />
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
