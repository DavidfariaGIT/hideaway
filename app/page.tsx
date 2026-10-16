'use client'

import Image from 'next/image'
import HeroImage from '@/public/archivephoto.jpg'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import HoverCard from './components/HoverCard';

export default function Home() {

  const container = useRef(null)

  useGSAP(() => {
    gsap.to('.hero', { opacity:1, duration: 1})
    gsap.to('.cover', {y:1000, duration: 1.3, onComplete: () => {
    gsap.set('.cover', { display: "none" })
    }})
  }, {scope: container})

  return (
    <main ref={container}>
      <section className="hero flex flex-col m-9 mt-20 opacity-0">
        <div className='h-70 overflow-hidden rounded-[10px]'>
        <Image src={HeroImage} alt="fashion collection" width={490}/>
        </div>
        <p className="text-[1.1rem] mt-10 text-gray-800">Hideaway is an Archive vintage fashion ecommerce site. Buy, sell and find some of the most sought after fashion pieces</p>
        <HoverCard/>
        <p className="mt-10 text-[1.1rem] text-gray-800">We carry all the best high fashion brands</p>
         <div className='cover h-screen bg-black absolute top-0 left-0 right-0 bottom-0'></div>
      </section>
     
    </main>
  )
}
