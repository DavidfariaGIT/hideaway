import { getProductById } from "@/app/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    notFound();
  }

  const { title, image, style, price, description } = product;

  const stock = true;

  return (
    <section className="mt-18 px-10 pb-20">
      <div className="flex flex-col items-center">
        <Image
          src={image}
          alt={`enlarged ${title}`}
          width={420}
          height={400}
          className="rounded-[15px]"
        />
        <div className="flex items-center justify-between w-[90%]">
          <div>
            <p className="mt-10 text-xl text-gray-600">{title}</p>
            <div className="flex items-center">
              <p className="mt-8 bg-gray-200 text-gray-600 text-sm inline-block py-1 px-2 rounded-[15px]">
                {style}
              </p>
              <p className="ml-4 mt-8 bg-gray-200 py-1 px-2 text-sm rounded-[15px]">
                {stock ? "in stock" : "not in stock"}
              </p>
            </div>
          </div>
          <div>
            <p className="ml-auto mt-25 font-medium">${price}</p>
          </div>
        </div>
        <p className="w-[90%] mt-12 text-gray-600">{description}</p>
        <button className="mt-12  bg-black text-gray-100 w-[90%] py-2 rounded-[15px]">
          Add to cart
        </button>
      </div>
    </section>
  );
}
