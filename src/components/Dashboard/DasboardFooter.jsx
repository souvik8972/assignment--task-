import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";

const DashboardFooter = () => {
  // Function to add active styles
  const activeClassName = "text-blue-500"; // Example of active class
  const defaultClassName = "text-gray-500"; // Default class

  return (
    <div className="h-[10vh] bg-gray-100 flex justify-around items-center shadow-md border-t border-gray-300">
      {/* Home Icon */}
      <NavLink
        to="/dashboard"
        className={({ isActive }) => `flex flex-col items-center ${isActive ? activeClassName : defaultClassName}`}
      >
        <BiHome size={24} />
        <span className="text-sm">Home</span>
      </NavLink>

      {/* Rota Icon */}
      <Link
        to=""
        className={({ isActive }) => `flex flex-col items-center ${isActive ? activeClassName : defaultClassName}`}
      >
        <CiLocationOn size={24} />
        <span className="text-sm">Rota</span>
      </Link>

      {/* Help Icon */}
      <Link
        to=""
        className={({ isActive }) => `flex flex-col items-center ${isActive ? activeClassName : defaultClassName}`}
      >
        <IoIosHelpCircleOutline size={24} />
        <span className="text-sm">Help</span>
      </Link>

      {/* Account Icon */}
      <NavLink
        to="/profile"
        className={({ isActive }) => `flex flex-col items-center ${isActive ? activeClassName : defaultClassName}`}
      >
        <CiUser size={24} />
        <span className="text-sm">Account</span>
      </NavLink>
    </div>
  );
};

export default DashboardFooter;
