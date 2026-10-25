import ProductsGrid from "./ProductsGrid"
import { getProducts } from "@/lib/products"

export default async function ProductsBrowser({filter, sort, search}:{
        sort?: string | undefined,
        filter?: string | undefined,
        search?: string | undefined
}) {

    const products = await getProducts(sort, filter, search)

    return(
        <ProductsGrid products={products}/>
    )
}