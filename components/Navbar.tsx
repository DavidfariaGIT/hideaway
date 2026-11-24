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

export default function Navbar({
  user,
  count,
}: {
  user: { name: unknown } | null;
  count: number;
}) {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".nav", { duration: 2.5, opacity: 1 });
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
          {user ? <LogoutButton /> : <LoginButton />}
        </ul>
        <Link href={'/cart'}>
          <div className="fixed bottom-12 right-10 flex justify-center items-center bg-black/35 backdrop-blur-xl backdrop-saturate-180 border border-gray-100/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-2xl w-30 text-sm text-white py-4 z-50">
            {count > 0 ? `Cart: ${count}` : "empty cart"}
          </div>
        </Link>
      </nav>
    </header>
  );
}
