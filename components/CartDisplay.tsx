import { Product } from "@/lib/types";
import CartCard from "./CartCard";

export default function CartDisplay({ items, deleteItem }: { items: Product[], deleteItem: Function }) {
  const itemsArray = items;
  const total = items.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0,)
  


  const cartItems = itemsArray.map((i) => {
    return <CartCard key={i.title} item={i} deleteItem={deleteItem}/>;
  });





  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <div className="w-[85%] h-158 p-8 bg-gray-800/40 backdrop-blur-xl backdrop-saturate-180 border border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-2xl flex gap-10 justify-evenly items-center overflow-x-auto scroll-auto">
        { itemsArray.length > 0 ? cartItems : <p className="text-gray-700">no items in your cart</p>}
      </div>
      <button className="mt-10 hover:underline hover:text-gray-500 cursor-pointer z-20">
        {total ? `Checkout - $${total}` : "Checkout"}
      </button>
    </section>
  );
}
