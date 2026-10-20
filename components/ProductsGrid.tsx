
import type { Product } from "@/lib/types"
import ProductCard from "./ProductCard"

export default function ProductsGrid({products}:{products:Product[]}) {

const productsData = products


  return (
    <main>
     {
      productsData.map((p) => {
        return (
          <ProductCard key={p.id} product={p}>{p.title}</ProductCard>
        )
      })
     }
    </main>
  )
}
