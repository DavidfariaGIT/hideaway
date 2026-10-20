import Image from "next/image";
import rick from "@/public/rick.jpg";
import lv from "@/public/lv.jpg";
import prada from "@/public/prada.jpg";
import { useState } from "react";



const images = {rick, lv, prada}

export default function HoverCard() {
  const [brand, setBrand] = useState<keyof typeof images>("rick");

  return (
    <div className="mt-10 grayscale-100 relative">
        <ul className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white/30 backdrop-blur-xl backdrop-saturate-180 border border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-2xl m-10">
        <div className="flex justify-center items-center h-[30%] px-8 gap-10 bg-black/35 backdrop-blur-xl backdrop-saturate-180 border border-black/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-2xl">
          <li onMouseEnter={() => setBrand("rick")} onMouseLeave={() => setBrand("rick")} className="text-white hover:text-white/40 cursor-default">Rick Owens</li>
          <li onMouseEnter={() => setBrand("prada")} onMouseLeave={() => setBrand("rick")} className="text-white hover:text-white/40 cursor-default">Prada</li>
          <li onMouseEnter={() => setBrand("lv")} onMouseLeave={() => setBrand("rick")} className="text-white hover:text-white/40 cursor-default">LV</li>
        </div>
        </ul>
      <Image src={images[brand]} width={475} alt={`image of hovered ${brand}`} className="rounded-[10px]"/>
    </div>
  );
}
