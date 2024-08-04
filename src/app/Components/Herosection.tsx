import React from 'react'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'
import Container from '../shared/container'
import Image from 'next/image'
import profilepic from "../../../public/photopersonal.jpeg"
import dynamic from 'next/dynamic'
import Marquee from './Marquee'
import ProjectGrid from "./Bento"

const AnimatedText = dynamic(() => import('../shared/Animatedtext'), {
  ssr: false,
});

const Herosection = () => { 
  return (
    <>
    <div className='mx-auto my-0 relative w-[780px]'>
      <div className="mt-[32px] py-[16px]">
        <div className="w-full px-[18px]">
          <div className="py-[4px] px-[16px]">
            <div className="flex flex-col">

              <div className='flex gap-6 items-center'>
              <Image alt='profile' src={profilepic} width="100" className='rounded-full'/>
              <div className='flex flex-col justify-start items-start'>
              <h1 className="text-[24px] font-semibold">Akshata Solapurkar</h1>
              <Link className=" items-center md:justify-center gap-2 font-normal flex text-light-grey" href="https://twitter.com/akshasolapurkar">@akshasolapurkar <MoveUpRight className="w-[15px] h-[15px]"/></Link>
              </div>
                
              </div>
              <div className="mt-[20px] text-left">
                <p className="text-[18px] md:text-[20px] font-medium">As a frontend developer, I'm on the lookout for exciting opportunities to blend my love for coding and design. With a curious mind and a passion for crafting engaging user experiences.In my free time, I play, read, and goof around.</p>
                <p className="text-light-grey mt-[20px] flex gap-2">Building what I love!!!
                 <Link className="items-center md:justify-center gap-2 font-normal flex" href="https://github.com/AkshataSolapurkar" ><AnimatedText text="@AkshataSolapurkar"/></Link>
                 </p>
              </div>
            </div>
            <Marquee/>
           <ProjectGrid/>
          </div>
        </div>
      </div>
    </div></>
    
    
    
  )
}

export default Herosection
