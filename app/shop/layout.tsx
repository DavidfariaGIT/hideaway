'use client'
import ShopNav from "@/components/ShopNav"
import { Suspense, useState } from "react"
import SearchBar from "@/components/SearchBar";
import ShopFilterControls from "@/components/ShopFilterControls";



export default function ShopLayout({children}:{
    children: React.ReactNode
}) {
    const [isOpen, setIsOpen] = useState(false)
    const openNav = () => {
        setIsOpen(prevOpen => !prevOpen)
    }
     
    return(
        <main>
            <div className="fixed bottom-15 left-0 right-0">
            <Suspense fallback={<p>loading search</p>}>
            <SearchBar />
            </Suspense>
            </div>
            <button 
            onClick={openNav}
            className="m-auto block mt-20 bg-gray-200 text-gray-500 py-2 px-4 rounded-full cursor-pointer"
            >Find what you're looking for</button>
            <ShopNav isOpen={isOpen} />
            <div className="grid grid-cols-[auto_auto] col-auto">
            <div>
             <Suspense fallback={<p>loading filter controls..</p>}>
                <ShopFilterControls/>
            </Suspense>
            </div>
            {children}
            </div>
        </main>
    )
}