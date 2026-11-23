import type { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  children,
  product,
  shop,
}: {
  children: string;
  product: Product;
  shop: boolean;
}) {
  const { id, price, image, style } = product;

  return (
    <section className="mb-10">
      <Link href={`/shop/${id}`}>
        <div
          className={`bg-gray-100 rounded-full flex flex-col items-center justify-center py-2 md:p-5 2xl:px-6 3xl:px-8`}
        >
          <Image
            src={image}
            alt={`image of ${children}`}
            width={770}
            height={900}
            className="rounded-full 2xl:w-75 3xl:w-95"
          />
        </div>
        <div className="text-center md:mt-6">
          <p className="mt-4 text-sm text-gray-600">{children}</p>
          <p className="mt-1 text-sm text-gray-400">{style}</p>
          <p className="mt-4 p-1.5 rounded-2xl text-white bg-black inline-block text-xs">
            ${price}
          </p>
        </div>
      </Link>
    </section>
  );
}
