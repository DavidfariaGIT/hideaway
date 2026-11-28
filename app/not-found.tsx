import NotFoundUI from "@/components/NotFoundUI"

export default function ProductsNotFound() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-110 gap-5 my-40">
      <h1 className="text-2xl w-100 text-center">oops the page you are looking for is not found</h1>
      <p className="text-3xl font-bold">404</p>
      <p className="text-3xl">🙈</p>
      </div>
    </main>
  )
}
