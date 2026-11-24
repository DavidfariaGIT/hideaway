"use client";
import { type ReactNode, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const isTransitioning = useRef(false);
  const previousPathname = useRef(pathname);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(overlay.current, {
        yPercent: -100,
        scaleY: 1,
        opacity: 1,
        transformOrigin: "top",
      });
      tl.current = gsap.timeline({ paused: true });
    },
    { scope: container },
  );

  useEffect(() => {
    const coverPage = contextSafe((url: string) => {
      const timeline = tl.current;
      if (!timeline || !overlay.current) return;

      gsap.set(overlay.current, {
        yPercent: -100,
        scaleY: 1,
        opacity: 1,
        transformOrigin: "top",
      });
      timeline.clear();
      timeline.eventCallback("onComplete", () => router.push(url));
      timeline.to(overlay.current, {
        yPercent: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      timeline.play(0);
    });

    const revealPage = contextSafe(() => {
      const timeline = tl.current;
      if (!timeline || !overlay.current) return;

      timeline.clear();
      timeline.eventCallback("onComplete", () => {
        isTransitioning.current = false;
        gsap.set(overlay.current, { yPercent: -100, scaleY: 1, opacity: 1 });
      });
      timeline.to(overlay.current, {
        scaleY: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        transformOrigin: "top",
      });
      timeline.play(0);
    });

    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      revealPage();
    }

    const handleClick = (event: MouseEvent) => {
      const link = event.currentTarget;
      if (!(link instanceof HTMLAnchorElement)) return;

      event.preventDefault();
      const url = new URL(link.href).pathname;
      if (url !== pathname && !isTransitioning.current) {
        isTransitioning.current = true;
        coverPage(url);
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]');
    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, [contextSafe, pathname, router]);

  return (
    <>
      <div ref={container}>
        <div
          ref={overlay}
          className="fixed inset-0 z-[100] origin-top bg-black"
        />
      </div>
      {children}
    </>
  );
}
