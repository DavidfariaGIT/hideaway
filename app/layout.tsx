import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAFA]"
         cz-shortcut-listen="true">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
