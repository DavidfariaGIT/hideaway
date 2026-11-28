import NotFoundUI from "@/components/NotFoundUI"

export default function ProductsNotFound() {
  return (
    <div>
      <NotFoundUI
      title="products not found"
      subtitle="no results found"
      linkText="go back home"
      link="/"
      />
    </div>
  )
}
