"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortControl() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const active = searchParams.get("sort");

  function handleSort(sort: string) {
    const urlSearchParams = new URLSearchParams(searchParams.toString())
    urlSearchParams.set('sort', sort)
    const url = `${pathname}?sort=${sort}`;
    router.push(url);
  }

  return (
    <section>
        <div className="flex mt-3 gap-5">
          <button
            onClick={() => handleSort("jacket")}
            className={`${active === "jacket" ? "bg-black text-gray-200" : ""} link-one opacity-0 hover:bg-gray-200 hover:text-gray-500 py-2 px-3 rounded-full cursor-pointer`}
          >
            Jackets
          </button>
          <button
            onClick={() => handleSort("pants")}
            className={`${active === "pants" ? "bg-black text-gray-200" : ""} link-two opacity-0 hover:bg-gray-200 hover:text-gray-500 py-2 px-3 rounded-full cursor-pointer`}
          >
            Pants
          </button>
          <button
            onClick={() => handleSort("shirt")}
            className={` ${active === "shirt" ? "bg-black text-gray-200" : ""} link-three opacity-0 hover:bg-gray-200 hover:text-gray-500 py-2 px-3 rounded-full cursor-pointer0`}
          >
            Shirts
          </button>
        </div>
      {active ? (
        <div className="mt-10 text-center">
          <button className="bg-gray-300 py-1 px-2 rounded-[15px] text-sm opacity-60" onClick={() => handleSort("")}>clear filters x</button>
        </div>
      ) : null}
    </section>
  );
}
