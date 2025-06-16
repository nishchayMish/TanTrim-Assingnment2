"use client";

import { useState } from "react";
import { NavLinks } from "@/constants";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
  HiOutlineBookmark,
  HiOutlineShoppingBag,
  HiOutlineBars3,
  HiXMark,
} from "react-icons/hi2";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black w-full shadow-md px-4 sm:px-15 py-4 relative z-50 opacity-[0.98]">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-gray-300 text-2xl tracking-[12px] font-[100]">TANN TRIM</h2>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4 text-gray-300 text-2xl cursor-pointer">
          <HiOutlineMagnifyingGlass className="hover:text-white transition duration-300" />
          <HiOutlineUser className="hover:text-white transition duration-300" />
          <HiOutlineBookmark className="hover:text-white transition duration-300" />
          <HiOutlineShoppingBag className="hover:text-white transition duration-300" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-gray-300 text-3xl cursor-pointer">
          {isMobileMenuOpen ? (
            <HiXMark onClick={() => setIsMobileMenuOpen(false)} />
          ) : (
            <HiOutlineBars3 onClick={() => setIsMobileMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center justify-center gap-8 sm:mt-8 mt-4">
        {NavLinks.map((link) => (
          <h2
            key={link.id}
            className="text-gray-400 hover:text-white transition duration-300 
            cursor-pointer text-sm font-medium uppercase tracking-wider"
          >
            {link.name}
          </h2>
        ))}
      </div>

      {/* Slide-in Mobile Nav */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-black z-50 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <HiXMark
            className="text-3xl text-gray-300 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>

        {/* Nav Links */}
        <div className="flex flex-col items-center gap-6 mt-10 text-gray-300">
          {NavLinks.map((link) => (
            <h2
              key={link.id}
              className="hover:text-white transition duration-300 cursor-pointer text-lg font-medium uppercase tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </h2>
          ))}

          {/* Icons */}
          <div className="flex justify-center gap-6 mt-6 text-2xl">
            <HiOutlineMagnifyingGlass className="hover:text-white" />
            <HiOutlineUser className="hover:text-white" />
            <HiOutlineBookmark className="hover:text-white" />
            <HiOutlineShoppingBag className="hover:text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
