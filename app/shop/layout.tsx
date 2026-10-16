'use client'
import ShopNav from "../components/ShopNav"
import { useState } from "react"

export default function ShopLayout({children}:{
    children: React.ReactNode
}) {
    const [isOpen, setIsOpen] = useState(false)
    const openNav = () => {
        setIsOpen(prevOpen => !prevOpen)
    }

    return(
        <main>
            <button 
            onClick={openNav}
            className="m-auto block mt-20 bg-gray-200 text-gray-500 py-2 px-4 rounded-full"
            >Find what you're looking for</button>
            <ShopNav isOpen={isOpen} />
            {children}
        </main>
    )
}