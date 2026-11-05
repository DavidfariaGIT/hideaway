import NotFoundUI from "@/components/NotFoundUI"

export default function ProductsNotFound() {
  return (
    <div>
      <NotFoundUI
      title="products not found"
      subtitle="no results found"
      linkText="back to products"
      link="/shop"
      />
    </div>
  )
}
