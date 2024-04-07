import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react'


const NavBar = () => {
   const [isSmallScreen, setIsSmallScreen] = useState(false);
   const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 768px is the breakpoint for md screen size
    };
  
    // Listen for resize events to update screen size state
    useEffect(() => {
      handleResize(); // Call it once to set initial state
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <div className='pt-6 w-full z-10 absolute'>
     <div className="relative flex items-center justify-center md:w-708 sm:mx-0 mx-5">

        <div className="bg-nav-bg backdrop-filter backdrop-blur-44 p-4 rounded-lg flex justify-between">
         <div className='item-center flex p-0'>
            <Image width={40} height={40} className='z-0 absolute object-fit' 
                src="/LOGO.png" 
                alt="pic"/>
         </div>
         <div>
         <nav className='ml-[15px] relative flex justify-between gap-3'>
            <Link className='block relative font-semibold leading-5 text-base' href="./TechStack">Tech Stack</Link>
            <Link className='block relative font-semibold leading-5 text-base' href="./TechStack">Projects</Link>
            <Link className='block relative font-semibold leading-5 text-base' href="./TechStack">Education</Link>
            <Link className='block relative font-semibold leading-5 text-base' href="./TechStack">GitHub</Link>
            
         </nav>
         </div>
        </div>

     </div>

     </div>
  )
}

export default NavBar
