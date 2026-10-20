import ProductsGrid from "./ProductsGrid"
import { getProducts } from "@/lib/products"

export default async function ProductsBrowser() {

    const products = await getProducts()

    return(
        <ProductsGrid products={products}/>
    )
}