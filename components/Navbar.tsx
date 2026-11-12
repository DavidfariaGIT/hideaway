"use client";

import Image from "next/image";
import HideLogo from "@/public/hideaway-logo.png";
import NavLink from "./Navlink";
import Link from "next/link";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Navbar({user, count}:{
    user: {name: unknown} | null,
    count: number
}) {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".nav", { duration: 1.8, opacity: 1 });
    },
    { scope: container },
  );

  gsap.registerPlugin(useGSAP);

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
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/cart">Cart</NavLink>
          <div className='w-10 h-10 flex justify-center items-center bg-gray-200 rounded-[15px] text-sm'>{`${count}`}</div>
          {user ? <LogoutButton/> : <LoginButton /> }
        </ul>
      </nav>
    </header>
  );
}
