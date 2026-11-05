import ProductsGrid from "./ProductsGrid";
import { getProducts, getProductsCount } from "@/lib/products";
import PaginationControls from "./PaginationControls";
import {notFound, redirect} from 'next/navigation'

export default async function ProductsBrowser({
  filter,
  sort,
  search,
  page,
  productsPerPage,
}: {
  sort?: string | undefined
  filter?: string | null
  search?: string | undefined
  page?: number | undefined
  productsPerPage?: number | undefined
}) {
  const products = await getProducts(
    sort,
    filter,
    search,
    page,
    productsPerPage,
  );

  if(products.length === 0) {
    notFound()
  }

  if (!productsPerPage) {
    productsPerPage = 4;
  }

  const productCount = await getProductsCount({ search, sort })
  const totalCount = Math.max(1, Math.ceil(productCount / productsPerPage))

    if (page && page < 1 || page && page > totalCount || filter === null) {
      redirect("/shop");
    }
  


  return (
    <>
      <ProductsGrid products={products} search={search}/>
      <PaginationControls currentPage={page} totalPages={totalCount}/>
    </>
  );
}
