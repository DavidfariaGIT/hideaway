'use client'

import type { Product } from "@/lib/types"
import { useState } from "react"

export default function CartCard({item, deleteItem}:{
  item: Product
  deleteItem: Function
}) {

  const [hovered, setIsHovered] = useState(false)

  const toggleHover = () => {
    setIsHovered(hovered => !hovered)
  }

  return (
    <div className="flex-none py-5 3xl:py-10 xl:px-3 3xl:px-15 bg-white/90 backdrop-blur-xl backdrop-saturate-180 border border-gray-200/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-2xl flex flex-col gap-2 items-center justify-evenly text-black">
        <h1 className="text-center">{item.title}</h1>
        <img src={item.image} className="w-[70%] md:w-[75%] xl:w-[85%] 3xl:w-85 bg-black text-center rounded-2xl"/>
        <div className="flex gap-2 py-2">
        <p className="text-sm">{item.brand}</p>
        <p className="text-sm">${item.price}</p>
        </div>
        <div className="rounded-2xl bg-gray-800 w-12 text-white h-12 p-3 absolute bottom-[-20] right-[10] flex justify-center items-center">
        <button onClick={() => deleteItem(item.id)} onMouseEnter={toggleHover} onMouseLeave={toggleHover} className="text-xl cursor-pointer">{hovered ? 'X' : item.quantity}</button>
        </div>
    </div>
  )
}
