import Image from "next/image";
import heroImage from "@/public/archivephoto.jpg";
import supportImage from "@/public/rick.jpg";

export default function ArticlePage() {
  return (
    <section>
      <div className="px-10 2xl:px-40 3xl:px-60">
        <h1 className="text-center mt-25 font-bold">
          Hideaway 2026 Winter Collection: How We Sourced, Obtained and Maintain
          the Winter Archive
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 py-10">
          <Image
            src={heroImage}
            width={1800}
            alt="clothing inventory"
            className="h-65 md:h-125 lg:h-155 overflow-hidden object-cover"
          />
          <div className="w-full text-[1.2rem] lg:text-[1rem] xl:text-[1.4rem] lg:px-4 leading-9 mt-5 lg:mt-0 3xl:leading-12">
            <p>
              This season's winter archive took us eight months to assemble,
              with our buyers traveling across Japan, Italy, and the UK to track
              down outerwear, knitwear, and heavy-weight pieces from labels'
              most influential winter runs.
              <br />
              <br /> Most of the collection came from private collectors, estate
              sales, and boutique closeouts, with a handful of deadstock finds
              uncovered in old warehouse stock. Once pieces arrive, each one is
              authenticated, professionally cleaned, and repaired where needed
              by our in-house team, then stored in climate-controlled conditions
              with cedar and breathable garment covers to protect wool, down,
              and leather from moisture and moths. The result is a collection
              that feels as close to its original condition as possible, ready
              to be worn for another few decades.
            </p>
          </div>
        </div>
        <div className="mt-10">
            <div className="2xl:grid 2xl:grid-cols-2 w-full">
                <p className="w-full text-[1.2rem] lg:text-[1rem] xl:text-[1.4rem] leading-9 2xl:px-10 3xl:leading-14 mb-5">
              Brand-wise, the winter archive leans heavily on the designers who
              defined the era. Rick Owens anchors the outerwear with draped
              leather jackets and heavy-weight shearling, while Raf Simons
              brings oversized wool coats and knitwear from his most
              sought-after seasons. Undercover and Comme des Garçons add
              experimental tailoring and deconstructed layering, Helmut Lang
              contributes minimalist, razor-sharp staples from his late-90s
              peak, and A-Cold-Wall* rounds out the selection with
              industrial-inspired technical shells.
            </p>
            <Image
              src={supportImage}
              width={1800}
              alt="clothing inventory"
              className="h-65 md:h-125 lg:h-155 overflow-hidden object-cover"
            />

            
            </div>

            <div className="flex justify-between mt-14 w-full text-sm 2xl:px-20">
              <p>2026-7-14</p>
              <p>john doe</p>
            </div>
          </div>
      </div>
    </section>
  );
}
