"use client"
import Image from "next/image";
import Footer from "./Components/Footer/Footer";
import Link from "next/link";
import { MoveUpRight } from 'lucide-react';


export default function Home() {
  return (
    <main>
      <div className="mt-[32px] py-[16px]">
        <div className="w-full px-[18px]">
          <div className="py-[4px] px-[16px]">
            <div className="flex justify-center flex-col  items-center">
              <div>
                <h1 className="text-[30px] md:text-[45px] font-semibold">Akshata Solapurkar</h1>
                <Link className=" items-center md:justify-center gap-2 font-normal flex text-light-grey" href="https://twitter.com/akshasolapurkar">@akshasolapurkar <MoveUpRight className="w-[15px] h-[15px]"/></Link>
              </div>
              <div className="max-w-[65%] mt-[20px] md:max-w-[40%] md:text-center text-left">
                <p className="text-[18px] md:text-[20px] font-medium">As a frontend developer, I'm on the lookout for exciting opportunities to blend my love for coding and design. With a curious mind and a passion for crafting engaging user experiences.In my free time, I play, read, and goof around.</p>
                <p className="text-light-grey mt-[20px]">Building what I love!!! <Link className="items-center md:justify-center gap-2 font-normal flex" href="https://github.com/AkshataSolapurkar" style={{ backgroundImage: 'linear-gradient(90.42deg, #4AB1F1 0.58%, #566CEC 20%, #D749AF 50%, #FF7C51 80%, #FF3366 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>@AkshataSolapurkar <MoveUpRight className="w-[15px] h-[15px]"/> </Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
