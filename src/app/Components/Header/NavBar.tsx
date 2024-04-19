"use client"
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react'
import { FileCheck,NotebookPen,Github ,Phone } from 'lucide-react';
interface justprops{
   open:boolean
}


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
    <div className='pt-6 w-full z-10'>
     <div className="relative flex items-center justify-center md:w-708 sm:mx-0 mx-5">

        <div className="px-[50px] md:px-[100px] md:bg-nav-bg bg-nav-sm backdrop-filter backdrop-blur-44 p-4 rounded-lg flex justify-between">
         <div className='item-center flex p-0'>
            
         </div>
         <div>
         {isSmallScreen ? (
              <nav className='ml-[15px] relative flex justify-between gap-3'>
              <Link className='block relative font-semibold leading-5 text-base mb-3' href="/techstack">
               <h4>
                  <span className='icon-resume'>
                     <span className='text text-[10px]'>Projects</span>
                     <span className='newicon'><FileCheck/></span>
                  </span>
               </h4></Link>
              <Link className='block relative font-semibold leading-5 text-base mb-3' href="/techstack">
               <h4>
                  <span className='icon-resume'>
                     <span className='text text-[10px]'>Resume</span>
                     <span className='newicon'><NotebookPen/></span>
                  </span>
               </h4></Link>
               <Link className='block relative font-semibold leading-5 text-base mb-3' href="/techstack">
               <h4>
                  <span className='icon-resume'>
                     <span className='text text-[10px]'>Github</span>
                     <span className='newicon'><Github/></span>
                  </span>
               </h4></Link>
              <Link className='block relative font-semibold leading-5 text-base mb-3' href="/TechStack">
               <h4>
                  <span className='icon-resume'>
                     <span className='text text-[9px]'>Contact</span>
                     <span className='newicon'><Phone/></span>
                  </span>
               </h4></Link>
              
           </nav>
            ) : (
               <nav className='ml-[15px] relative flex justify-between gap-3'>
               <Link className='block relative font-semibold leading-5 text-base' href="./techstack">Projects</Link>
               <Link className='block relative font-semibold leading-5 text-base' href="./techstack">Resume</Link>
               <Link className='block relative font-semibold leading-5 text-base' href="./techstack">Github</Link>
               <Link className='block relative font-semibold leading-5 text-base' href="./techstack">Contact</Link>
               
            </nav>
            )}
         
         </div>
        </div>

     </div>

     </div>
  )
}

export default NavBar
