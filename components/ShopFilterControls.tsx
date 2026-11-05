import { useSearchParams, useRouter, usePathname} from "next/navigation";

export default function ShopFilterControls() {
    const searchParams = useSearchParams()
    const isActive = searchParams.get('filter')

    const pathname = usePathname()
      const router = useRouter()

      function handleFilter(filter:string) {
        const url = `${pathname}?filter=${filter}`
        const urlSearchParams = new URLSearchParams(searchParams.toString())
        urlSearchParams.set('filter', filter)
        urlSearchParams.delete('page')
        router.push(url)
      }

      
    return (
         <aside className="mt-19 ml-1">
                <div className="flex flex-col gap-8 pl-2 items-center" >
                    <button 
                    className={`cursor-pointer text-sm ${isActive === "year" ? 'text-gray-300' : " "}`}
                    onClick={() => handleFilter('year')}
                    >
                        year
                    </button>
                     <button 
                     className={`cursor-pointer text-sm ${isActive === "a-z" ? 'text-gray-300' : " "}`}
                     onClick={() => handleFilter('a-z')}
                     >
                        A-Z
                    </button>
                    <button 
                    className={`cursor-pointer text-sm ${isActive === "price" ? 'text-gray-300' : " "}`}
                    onClick={() => handleFilter('price')}
                    >
                        price
                    </button>
                </div>
            </aside>
    )
}