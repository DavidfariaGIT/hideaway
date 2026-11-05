import NotFoundUi from "@/components/NotFoundUI"

export default function ProductNotFound() {
  return (
    <div>
      <NotFoundUi
      title="Product not found"
      subtitle="Cant find the requested product"
      linkText="return to products"
      link="/shop"
      />
    </div>
  )
}
