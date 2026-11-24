'use client'

import Image from "next/image";
import rick from "@/public/rick.jpg";
import lv from "@/public/lv.jpg";
import prada from "@/public/prada.jpg";
import { useState } from "react";



const images = {rick, lv, prada}

export default function HoverCard() {
  const [brand, setBrand] = useState<keyof typeof images>("rick");

  return (
    <div className="mt-10 grayscale-100 relative 2xl:w-[80%]">
        <ul className="absolute left-0 right-0 bottom-0 mx-10 mb-5 h-[20%] flex items-center justify-evenly bg-white/30 backdrop-blur-xl backdrop-saturate-180 border border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-2xl">
        <div className="h-[90%] w-[99%] flex justify-evenly items-center px-8 bg-black/35 backdrop-blur-xl backdrop-saturate-180 border border-black/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-2xl">
          <li onMouseEnter={() => setBrand("rick")} onMouseLeave={() => setBrand("rick")} className="px-4 text-white lg:text-[1.5rem] 2xl:text-[1rem] hover:text-white/40 cursor-default">Rick Owens</li>
          <li onMouseEnter={() => setBrand("prada")} onMouseLeave={() => setBrand("rick")} className="px-4 text-white lg:text-[1.5rem] 2xl:text-[1rem] hover:text-white/40 cursor-default">Prada</li>
          <li onMouseEnter={() => setBrand("lv")} onMouseLeave={() => setBrand("rick")} className="px-4 text-white lg:text-[1.5rem] 2xl:text-[1rem] hover:text-white/40 cursor-default">LV</li>
        </div>
        </ul>
      <Image src={images[brand]} width={1500} alt={`image of hovered ${brand}`} className="rounded-2xl"/>
    </div>
  );
}
