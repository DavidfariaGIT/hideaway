'use client'

import Image from 'next/image'
import HeroImage from '@/public/archivephoto.jpg'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import HoverCard from '@/components/HoverCard';
import ProductCard from '@/components/ProductCard';
import products from "@/data/products.json";
import type { Product } from '@/lib/types';

export default function Home() {
  const container = useRef(null)
  const productsArray = products
  const limit = 3
  let popularProducts = 0


 /* useGSAP(() => {
    gsap.to('.hero', { opacity:1, duration: 1})
    gsap.to('.cover', {y:1000, duration: 1.3, onComplete: () => {
    gsap.set('.cover', { display: "none" })
    }})
   }, {scope: container})
  */


  return (
    <main /*ref={container}*/>
      <section className="hero flex flex-col md:items-center m-9 mt-20 md:mx-4 2xl:mx-40 3xl:mx-80">
        <div className='h-70 md:h-90 md:w-full 2xl:w-[93%]  2xl:mt-2 overflow-hidden rounded-2xl'>
        <Image src={HeroImage} alt="fashion collection" width={1800}/>
        </div>
        <div className='2xl:flex 2xl:mt-20 2xl:mr-11 3xl:mr-16'>
        <p className="text-[1.1rem] lg:text-[2.25rem] xl:text-[1.85rem] 2xl:text-[1.5rem] mt-10 px-2 lg:px-0 py-10 lg:py-20 2xl:px-18 lg:text-center 2xl:w-[55%] 2xl:mt-30 3xl:mt-[10%] 3xl:w-[50%] 3xl:px-20 3xl:text-[2rem] bg-linear-to-b g-linear-to-t bg-clip-text text-transparent from-black to-gray-300">Hideaway is an Archive vintage fashion ecommerce site. Buy, sell and find some of the most sought after fashion pieces</p>
        <HoverCard/>
        </div>
        <div className='my-10 xl:mx-27 2xl:mx-7 3xl:mx-12'>
          <p className='text-center text-4xl 3xl:text-[3rem] bg-linear-to-b bg-clip-text text-transparent from-black to-gray-200 lg:py-15 lg:px-10 2xl:mt-25 2xl:px-0'>Curated collection of some of fashion's most sought after items. Find a piece of fashion history and make it yours</p>
        </div>
        <h2 className='text-center mt-20 text-5xl lg:text-[3.5rem] z-0 bg-linear-to-t bg-clip-text text-transparent from-black to-gray-100'>POPULAR NOW</h2>
        <section className='mt-[-10] lg:mt-[-11] flex flex-col 2xl:flex-row items-center justify-center gap-5 3xl:gap-25 z-5 md:w-screen 2xl:mb-10'>
          {productsArray.map((p: Product) => {
            if (p.popular && limit > popularProducts) {
            popularProducts++
             return ( 
              <ProductCard key={p.id} product={p} >{p.title}</ProductCard>
             )
            }
          })
          }
        </section></section>
    </main>
  )
}
