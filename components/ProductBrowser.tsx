import ProductsGrid from "./ProductsGrid"
import { getProducts, getProductsCount } from "@/lib/products"
import PaginationControls from "./PaginationControls"

export default async function ProductsBrowser({filter, sort, search, page, productsPerPage}:{
        sort?: string | undefined,
        filter?: string | undefined,
        search?: string | undefined,
        page?: number | undefined,
        productsPerPage?: number | undefined
}) {

    const products = await getProducts(sort, filter, search, page, productsPerPage)

    const productCount = await getProductsCount({search})
    const totalCount = Math.ceil(productCount / productsPerPage)
  

    return(
        <>
        <ProductsGrid products={products}/>
        <PaginationControls page={3} totalPages={totalCount}/>
        </>

    )
}