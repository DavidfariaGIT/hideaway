import PaginationButton from "./PaginationButton"

export default function PaginationControls({page, totalPages}:{
    page:number,
    totalPages: number
}) {


  const pagesArray = Array.from({length: totalPages}, (_, i) => i + 1)
  return (
    <section className="absolute bottom-0 flex justify-center items-center gap-3 w-full">
      {pagesArray.map((p, index) => {
        return <PaginationButton key={index} page={p}/>
      })
        
      }
       
    </section>
   
  )
}
