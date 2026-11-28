
import { Be_Vietnam_Pro } from 'next/font/google'

const Vietnam_Pro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vietnam-alternates"})

import { Suspense } from "react";
import NavbarServer from "@/components/NavbarServer";
import PageTransition from "../components/PageTransition";
import "./globals.css";

import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {


  return (
    <html lang="en">
      <body className={`bg-[#FAFAFA] ${Vietnam_Pro.className}`}
         cz-shortcut-listen="true">
       <PageTransition>
        <Suspense fallback={null}>
          <NavbarServer/>
        </Suspense>
        {children}
        <Footer/>
      </PageTransition>
      </body>
    </html>
  );
}
