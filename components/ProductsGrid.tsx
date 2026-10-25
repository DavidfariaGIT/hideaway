import type { Product } from "@/lib/types"
import ProductCard from "./ProductCard"

export default function ProductsGrid({products}:{products:Product[]}) {

const productsData = products

  return (
    <main className="mt-20 flex flex-wrap justify-center gap-4 pl-2">
     {
      productsData.map((p) => {
        return (
          <ProductCard shop={true} key={p.id} product={p}>{p.title}</ProductCard>
        )
      })
     }
    </main>
  )
}
