import ProductsBrowser from "@/components/ProductBrowser"
import { Suspense } from "react"

export default function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string, filter?: string, search?:string }>;
}) {
  return (
    <Suspense fallback={<div>loading product...</div>}>
      <ShopBrowser searchParams={searchParams}/>
    </Suspense>
  );
}
 async function ShopBrowser({ searchParams }:{
searchParams:Promise<{
    sort?:string
    filter?:string
    search?:string
}>
}) {
    
    const searchParamsVar = await searchParams

    const sort = searchParamsVar.sort as string || ""
    const filter = searchParamsVar.filter as string || ""
    const search = searchParamsVar.search as string || ""


    return (
        <ProductsBrowser filter={filter} sort={sort} search={search}/>
    )
}