'use client'
import NavLink from "./Navlink"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ShopNav({ isOpen }: {
    isOpen: boolean
}) {
     
    const container = useRef(null)


    useGSAP(() => {
        if(isOpen) {
        gsap.to('.link-one', { y:8, opacity: 1, ease: "power2.out", duration: 1})
        gsap.to('.link-two', { y:8, opacity: 1, ease: "power2.out", duration: 1.5})
        gsap.to('.link-three', {y:8,  opacity: 1, ease: "power2.out", duration: 2})
        }
    }, {scope: container, dependencies: [isOpen]})

    return (
        <nav ref={container} className="flex justify-center">
            {isOpen ? 
            <ul className="flex mt-3">
                <div className="link-one opacity-0"><NavLink href='/shop/t-shirts'>T shirts</NavLink></div>
                <div className="link-two opacity-0"><NavLink href='/shop/hoodies'>Hoodies</NavLink></div>
                <div className="link-three opacity-0"><NavLink href='/shop/pants'>Pants</NavLink></div>
            </ul> : 
            null
        }
        </nav>
    )
}