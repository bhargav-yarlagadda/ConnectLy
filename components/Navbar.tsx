'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
const Navbar = () => {
  const {isSignedIn} = useUser()
  return (

    <div className="bg-gray-900 py-2 shadow-lg">
      <div className="flex flex-wrap px-4 justify-between items-center">

        {/* Logo Section */}
        <div className="flex justify-center items-center gap-4 sm:mb-0">
          <Image 
            src="/logo.svg" 
            alt="logo" 
            width={50} 
            height={50} 
            className="rounded-full " 
          />
          <span className="text-gray-300 text-xl font-bold tracking-wide hidden md:block">ConnectLy.</span>
        </div>

        {/* Link Section */}
        {
          isSignedIn? <UserButton/> :
        <nav className="flex flex-wrap gap-4">
          <Link href="/log-in" className="md:px-4 px-1 py-2 text-xs md:text-sm text-gray-300 rounded-sm shadow-md hover:text-green-500 bg-blue-950 focus:outline-none">
            Log In
          </Link>
          <Link href="/sign-up" className="md:px-4 px-1 py-2 text-xs md:text-sm text-gray-300 rounded-sm shadow-md hover:text-green-500 bg-blue-950 focus:outline-none">
            Sign Up
          </Link>
        </nav>
        }

      </div>
    </div>
  );
};

export default Navbar;
