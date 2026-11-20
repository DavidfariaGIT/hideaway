import FooterSection from "./FooterSection";
import Image from "next/image";
import HeroImage from "@/public/hideaway-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col mt-30">
        <div className="h-25 flex justify-center items-center">
          <Image
            src={HeroImage}
            alt="fashion collection"
            width={800}
            className="invert-100 overflow-hidden max-sm:w-1/2 sm:w-1/3"
          />
        </div>
        <FooterSection links={["Us", "FAQ", "Policy"]}>About</FooterSection>
        <FooterSection links={["Archive", "Editorial"]}>Articles</FooterSection>
        <FooterSection links={["Instagram", "Email", "Phone"]}>
          Contact
        </FooterSection>
      </div>
    </footer>
  );
}
