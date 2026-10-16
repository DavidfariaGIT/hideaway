"use client"

import Image from "next/image";
import HideLogo from "@/public/hideaway-logo.png";
import NavLink from "./Navlink";
import Link from "next/link";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP)

export default function Navbar() {

const container = useRef<HTMLElement>(null)

useGSAP(() => {
    gsap.to('.nav', {duration:1.8, opacity: 1})
},{scope:container})

  return (
    <header ref={container}>
      <nav className="nav h-15 flex items-center overflow-hidden px-2 opacity-0">
        <div className="">
        <Link href="/">
          <Image
            src={HideLogo}
            alt="hideaway logo"
            width={120}
            className="invert-100 cursor-pointer"
          />
          </Link>
        </div>
        <ul className="flex gap-7 ml-auto mr-5">
            <NavLink href='/shop'>Shop</NavLink>
            <NavLink href='/cart'>Cart</NavLink>
        </ul>
      </nav>
    </header>
  );
}
