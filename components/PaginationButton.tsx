"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function PaginationButton({page, currentPage}:{
  page:number, 
  currentPage: boolean
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
  className={`${currentPage ? 'bg-black' : "bg-gray-200"}  text-white w-10 h-10 rounded-[15px] z-0`}
  onClick={handlePageChange}
  >
    {page}
  </button>
  )
}

