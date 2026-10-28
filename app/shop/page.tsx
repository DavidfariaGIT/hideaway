import ProductsBrowser from "@/components/ProductBrowser"
import { Suspense } from "react"

export default function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string, filter?: string, search?:string, page?:number }>;
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
    page?:number
}>
}) {
    
    const searchParamsVar = await searchParams

    const sort = searchParamsVar.sort as string || ""
    const filter = searchParamsVar.filter as string || ""
    const search = searchParamsVar.search as string || ""
    const page = Number(searchParamsVar.page) || 1

    const productsPerPage = 4


    return (
        <ProductsBrowser filter={filter} sort={sort} search={search} page={page} productsPerPage={productsPerPage}/>
    )
}