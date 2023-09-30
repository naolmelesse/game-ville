'use client'
import { useState } from "react";

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 p-4 fixed w-full">
      <div className="container w-4/5 mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Game Ville</div>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (visible on larger screens) */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>

      {/* Collapsible Menu (visible on small screens) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-white mb-2">
            Home
          </a>
          <a href="#" className="block text-white mb-2">
            About
          </a>
          <a href="#" className="block text-white mb-2">
            Services
          </a>
          <a href="#" className="block text-white mb-2">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

