import CartCard from "./CartCard";

export default function CartDisplay() {
    const total = '$12'
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <div className="w-[85%] h-150 p-7 bg-gray-800/40 backdrop-blur-xl backdrop-saturate-180 border border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-2xl flex flex-wrap gap-5 justify-evenly items-center">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
      <button className="mt-10 hover:underline hover:text-gray-500 cursor-pointer z-20">{total ? `Checkout - ${total}` : 'Checkout'}</button>
    </section>
  );
}
