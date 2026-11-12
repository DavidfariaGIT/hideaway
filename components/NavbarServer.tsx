import { cookies } from "next/headers";
import { decrypt } from "@/lib/sessions";
import { getCartItemCount } from "@/lib/cart";
import Navbar from "./Navbar";

export default async function NavbarServer() {
  const cookieStore = await cookies()
  const token = cookieStore.get('session')?.value
  const session = token ? await decrypt(token) : null

  const user = session ? {name: session.email} : null

  const cartCount = await getCartItemCount()

  return <Navbar user={user} count={cartCount}/>
}
