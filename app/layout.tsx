import { Suspense } from "react";
import NavbarServer from "@/components/NavbarServer";
import "./globals.css";

import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {


  return (
    <html lang="en">
      <body className="bg-[#FAFAFA]"
         cz-shortcut-listen="true">
        <Suspense fallback={<p>loading user data..</p>}>
          <NavbarServer/>
        </Suspense>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
