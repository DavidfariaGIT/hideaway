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
        <div className='my-10'>
          <p className='text-center text-4xl bg-linear-to-b bg-clip-text text-transparent from-gray-800 to-gray-200'>Curated collection of some of fashion's most sought after items. Find a piece of fashion history and make it yours</p>
        </div>
        <h2 className='text-center mt-20 text-5xl z-0 bg-linear-to-t bg-clip-text text-transparent from-gray-500 to-gray-100'>POPULAR NOW</h2>
        <section className='mt-[-10] flex flex-col gap-5 z-5'>
          {productsArray.map((p: Product) => {
            if (p.popular && limit > popularProducts) {
            popularProducts++
             return (
              <ProductCard key={p.id} product={p} >{p.title}</ProductCard>
             )
            }
          })
          }
        </section>
         <div className='cover h-screen bg-black absolute top-0 left-0 right-0 bottom-0 z-100'></div>
      </section>
     
    </main>
  )
}
