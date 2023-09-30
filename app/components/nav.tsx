'use client'
import { useState } from "react";
import { FiMenu } from 'react-icons/fi';
import { Input } from "@/components/ui/input"
import Link from "@/node_modules/next/link";
import { Button } from "@/components/ui/button"

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  
  
  return (
    <nav className=" py-5 w-full">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">

        <div className="flex justify-between w-full lg:w-auto mb-5 lg:mb-auto">
          <Link href="/" className=" font-bold text-xl">Game Ville</Link>

          <div className="md:hidden">
              <FiMenu onClick={toggleMenu} className="md:hidden "/>
          </div>
        </div>

        {isOpen && (
          <div className="w-full mx-auto md:hidden mt-4">
            <Link href="" className="block  mb-2">
              Home
            </Link>
            <Link href="#" className="block  mb-2">
              My Games
            </Link>
            <Link href="#" className="block  mb-2">
              Trending
            </Link>
          </div>
        )}
 
        <div className="flex lg:w-2/5">
          <input className="px-3 py-2 rounded-l-full lg:w-4/5" type="text" name="search" placeholder="search"/>
          <button className="px-4 py-1 bg-[#333] text-[#fff] lg:w-1/5 rounded-r-full hover:bg-primary/90">Search</button>
        </div>
        
        <div className="hidden md:flex text-lg space-x-4">
          <Link href="" className="">
            Home
          </Link>
          <Link href="#" className="block  mb-2">
            My Games
          </Link>
          <Link href="#" className="block  mb-2">
            Trending
          </Link>
        </div>

      </div>

    </nav>
  );
};

