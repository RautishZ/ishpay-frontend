import React from "react";
import { NavLink } from "react-router-dom";

function SideBar({ isOpen, setIsSidebarOpen }) {
  return (
    <div
      className={`text-lg font-semibold fixed top-[60px] left-0 h-full bg-ishprimary shadow-2xl z-40 transition-all duration-300 ease-in-out ${
        isOpen ? "w-64 opacity-100" : "w-16 opacity-0"
      }`}
      style={{ overflowX: "hidden" }}
    >
      <ul
        className={`text-white space-y-4 px-4 pt-8 transition-opacity duration-300 ease-in-out ${
          isOpen ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <li>
          <NavLink
            to="/home"
            end
            className={({ isActive }) =>
              `block p-2 rounded-md ${
                isActive ? "bg-ishprimary-600" : "hover:bg-ishprimary-600"
              }`
            }
            onClick={() => setIsSidebarOpen(false)}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `block p-2 rounded-md ${
                isActive ? "bg-ishprimary-600" : "hover:bg-ishprimary-600"
              }`
            }
            onClick={() => setIsSidebarOpen(false)}
          >
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/payment/bank-transfer"
            className={({ isActive }) =>
              `block p-2 rounded-md ${
                isActive ? "bg-ishprimary-600" : "hover:bg-ishprimary-600"
              }`
            }
            onClick={() => setIsSidebarOpen(false)}
          >
            Transfer
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
