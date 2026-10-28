"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function PaginationButton({page}:{
  page:number
}) {

    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const handlePageChange = () => {
      const urlSearchParams = new URLSearchParams(searchParams.toString())
      urlSearchParams.set('page', page.toString())
      const url = `${pathname}?${urlSearchParams.toString()}`
      router.push(url)
    }


  return (
  <button
  className="bg-gray-200 text-white w-10 h-10 rounded-[15px]"
  onClick={handlePageChange}
  >
    {page}
  </button>
  )
}

