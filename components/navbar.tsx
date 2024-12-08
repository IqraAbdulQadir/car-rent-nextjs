'use client';
import React, { useState } from "react";
import Image from "next/image";

// Import SVGs
import filter from "@/public/navbar svgs/filter.svg";
import heart from "@/public/navbar svgs/heart.svg";
import profile from "@/public/navbar svgs/Profile.svg";
import notification from "@/public/navbar svgs/notification.svg";
import search from "@/public/navbar svgs/search.svg";
import setting from "@/public/navbar svgs/setting.svg";

const Navbar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initial state is false, menu is closed

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle menu visibility
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
      {/* Left Section - Logo */}
      <div className="text-primary-500 font-bold text-2xl md:text-3xl">
        MORENT
      </div>

      {/* Middle Section - Search Bar */}
      <div className="flex items-center justify-center flex-grow hidden md:flex">
        <div className="flex items-center w-[492px] h-[44px] border border-[#C3D4E9]/40 rounded-full px-4 bg-white">
          <Image
            src={search}
            alt="Search Icon"
            width={20}
            height={20}
            className="mr-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full text-secondary-400 text-[14px] font-medium outline-none bg-transparent"
          />
          <button
            className="ml-4"
            onClick={onToggleSidebar}
            aria-label="Toggle filter sidebar"
          >
            <Image src={filter} alt="Filter Icon" width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Right Section - Profile & Notifications */}
      <div className="flex items-center space-x-4 hidden md:flex">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border border-[#C3D4E9]/40 hover:border-secondary-400">
          <Image
            src={notification}
            alt="Notifications"
            width={24}
            height={24}
            className="hover:text-secondary-400"
          />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border border-[#C3D4E9]/40 hover:border-secondary-400">
          <Image
            src={setting}
            alt="Settings"
            width={24}
            height={24}
            className="hover:text-secondary-400"
          />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border border-[#C3D4E9]/40 hover:border-secondary-400">
          <Image
            src={profile}
            alt="Profile"
            width={24}
            height={24}
            className="hover:text-secondary-400"
          />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border border-[#C3D4E9]/40 hover:border-secondary-400">
          <Image
            src={heart}
            alt="Favorites"
            width={24}
            height={24}
            className="hover:text-secondary-400"
          />
        </button>
      </div>

      {/* Hamburger Menu for mobile */}
      <div className="md:hidden absolute right-6 top-4" onClick={toggleMenu}>
        <div className="flex flex-col space-y-2 cursor-pointer">
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 p-6 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <button className="w-full text-left py-2" onClick={() => setIsMenuOpen(false)}>Home</button>
        <button className="w-full text-left py-2" onClick={() => setIsMenuOpen(false)}>Services</button>
        <button className="w-full text-left py-2" onClick={() => setIsMenuOpen(false)}>Contact</button>
        <button className="w-full text-left py-2" onClick={() => setIsMenuOpen(false)}>About</button>
      </div>
    </nav>
  );
};

export default Navbar;
