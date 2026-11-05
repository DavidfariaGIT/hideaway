import ProductsBrowser from "@/components/ProductBrowser";
import { Suspense } from "react";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";
import { getQueryParams } from "@/lib/utils";

export default function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    sort?: string
    filter?: string
    search?: string
    page?: number
  }>;
}) {
  return (
    <Suspense fallback={<div>loading product...</div>}>
      <ShopBrowser searchParams={searchParams} />
    </Suspense>
  );
}
async function ShopBrowser({
  searchParams,
}: {
  searchParams: Promise<{
    sort?: string
    filter?: string
    search?: string
    page?: number
  }>;
}) {
  const { search, sort, filter, page } = getQueryParams(await searchParams);

  return (
    <ProductsBrowser
      filter={filter}
      sort={sort}
      search={search}
      page={page}
      productsPerPage={PRODUCTS_PER_PAGE}
    />
  );
}
