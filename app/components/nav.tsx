'use client'
import { useState } from "react";
import { FiMenu } from '@/node_modules/react-icons/fi';
import Link from "@/node_modules/next/link";
import { useRouter } from "next/navigation";

export default function Navbar(){
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  
  return (
    <nav className="pt-5 w-full">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">

        <div className="flex justify-between w-full lg:w-auto mb-5 lg:mb-auto">
          <Link href="/" className=" font-bold text-xl">GameVille</Link>

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
              Favourites
            </Link>
            <Link href="#" className="block  mb-2">
              Trending
            </Link>
          </div>
        )}
 
        <div className="flex lg:w-2/5">
          <input className="px-3 py-2 border rounded-l-full lg:w-4/5" type="text" name="search"
                  placeholder="Search for games..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => {if(e.key === 'Enter') router.push(`/search/${query}`)} }
                  />   
          <button type="button" className="-ml-1 px-4 py-1 bg-[#333] text-[#fff] lg:w-1/5 rounded-r-full hover:bg-primary/90"
           onClick={() => router.push(`/search/${query}`) }
           >Search</button>
        </div>
        
        <div className="hidden md:flex text-lg space-x-4">
          <Link href="" className="">
            Home
          </Link>
          <Link href="#" className="block  mb-2">
            Favourites
          </Link>
          <Link href="#" className="block  mb-2">
            Trending
          </Link>
        </div>

      </div>

    </nav>
  );
};

