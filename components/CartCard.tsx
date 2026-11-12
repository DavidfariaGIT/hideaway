
export default function CartCard() {
  return (
    <div className="h-55 w-45 bg-white/70 backdrop-blur-xl backdrop-saturate-180 border border-gray-200/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-[15px] flex flex-col items-center justify-evenly text-white">
        <h1>Product title</h1>
        <div className="h-38 w-[90%] bg-black text-center rounded-[15px]"></div>
        <p className="text-md">product price</p>
    </div>
  )
}
