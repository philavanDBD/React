import React from "react";
import { IoIosList } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../../style/Navbar.css";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-2 border-b shadow-sm">
      {/* Left side: Menu icon + Logo/Title */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-[#333] flex items-center">
          <span className="menu-icon flex items-center mr-2">
            <IoIosList />
          </span>
          <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold mr-1">
            U
          </span>
          <span className="text-black">LaLa</span>
          <span className="Dev text-green-500">Dev</span>
        </h1>
      </div>

      {/* Right side: Super Admin dropdown */}
      <div className="super-admin">
        SUPER ADMIN
        <span className="drop-icon">
          <RiArrowDropDownLine />
        </span>
      </div>
    </header>
  );
}
