import { Suspense } from "react";
import NavbarServer from "@/components/NavbarServer";
import PageTransition from "../components/PageTransition";
import "./globals.css";

import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {


  return (
    <html lang="en">
      <body className="bg-[#FAFAFA]"
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
