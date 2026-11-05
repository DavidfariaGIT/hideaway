import PaginationButton from "./PaginationButton"

export default function PaginationControls({currentPage, totalPages}:{
    totalPages: number,
    currentPage: number | undefined
}) {

  const pagesArray = Array.from({length: totalPages}, (_, i) => i + 1)
  return (
    <section className="absolute bottom-0 flex justify-center items-center gap-3 w-full">
      {pagesArray.map((p, index) => {
        return <PaginationButton key={index} page={p} currentPage={p === currentPage}/>
      })
        
      }
       
    </section>
   
  )
}
