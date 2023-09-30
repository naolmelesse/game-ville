'use client'
import { useState } from "react";
import { FiMenu } from 'react-icons/fi';
import { Input } from "@/components/ui/input"
import Link from "@/node_modules/next/link";

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className=" p-4 fixed w-full">
      <div className="container w-4/5 mx-auto flex justify-between items-center">
        <h2 className="text-white font-bold text-xl">Game Ville</h2>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className="md:hidden">
            <FiMenu onClick={toggleMenu} className="md:hidden text-white"/>
        </div>
 
        {/* Navigation Links (visible on larger screens) */}
        <div className="hidden md:flex space-x-4">
          <Link href="#" className="text-white">
            Home
          </Link>
          <Link href="#" className="text-white">
            About
          </Link>
          <Link href="#" className="text-white">
            Services
          </Link>
          <Link href="#" className="text-white">
            Contact
          </Link>
        </div>
      </div>

      {/* Collapsible Menu (visible on small screens) */}
      {isOpen && (
        <div className="w-4/5 mx-auto md:hidden mt-4">
          <Link href="#" className="block text-white mb-2">
            Home
          </Link>
          <Link href="#" className="block text-white mb-2">
            About
          </Link>
          <Link href="#" className="block text-white mb-2">
            Services
          </Link>
          <Link href="#" className="block text-white mb-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

