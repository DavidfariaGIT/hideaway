import { getProductById } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { addToCart } from "@/lib/actions";
import Form from "next/form";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<div>loading product...</div>}>
      <ProductDetails params={params} />
    </Suspense>
  );
}

async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    notFound();
  }

  const { title, image, style, price, description } = product;

  const stock = true;

  const addProductToCart = addToCart.bind(null, id, 1);

  return (
    <section className="mt-12 lg:mt-30 lg:px-10 xl:px-20 2xl:px-30 pb-20 w-screen">
      <div className="flex flex-col lg:flex-row items-start 2xl:mr-45">
        <div className="flex justify-center w-screen">
        <Image
          src={image}
          alt={`enlarged ${title}`}
          width={1200}
          height={400}
          className="rounded-[15px] w-90 md:w-100 lg:w-110 xl:w-120 2xl:w-[60%]"
        />
        </div>
        <div className="mt-20 xl:mt-30 2xl:mt-20">
        <div className="flex justify-between w-full px-5 md:px-15">
          <div>
            <p className="mt-10 text-xl xl:text-2xl 2xl:text-3xl text-gray-600">{title}</p>
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
        <div className="px-5 md:px-15">
          <p className="mt-12 text-gray-600 2xl:text-[1.5rem]">{description}</p>
          <Form className="w-full" action={addProductToCart}>
            <button
              type="submit"
              className="mt-12 bg-black text-gray-100 w-full py-2 rounded-[15px] cursor-pointer"
            >
              Add to cart
            </button>
          </Form>
        </div>
        </div>
        </div>
    </section>
  );
}
