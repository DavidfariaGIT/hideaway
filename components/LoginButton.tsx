import Link from "next/link"

export default function LoginButton() {
  return (
      <Link  href="/login" className="bg-black py-1 px-2 text-white rounded-[15px] cursor-pointer my-auto">Log in</Link>
  )
}
