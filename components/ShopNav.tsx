
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SortControl from './SortControls';

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
            <SortControl/>
            : null
        }
        </nav>
    )
}