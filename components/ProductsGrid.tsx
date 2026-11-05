import type { Product } from "@/lib/types"
import ProductCard from "./ProductCard"

export default function ProductsGrid({products, search}:{products:Product[], search:string | undefined}) {

const productsData = products
let title = 'Products page'
if(search) {
  title = `search results for ${search}`
} 


  return (
    <main className="mt-20">
      <h1 className="text-center text-[1rem] py-7 pr-12">{title}</h1>
      <div className="flex flex-wrap justify-center gap-4 pl-2">
     {
      productsData.map((p) => {
        return (
          <ProductCard shop={true} key={p.id} product={p}>{p.title}</ProductCard>
        )
      })
     }
     </div>
    </main>
  )
}
