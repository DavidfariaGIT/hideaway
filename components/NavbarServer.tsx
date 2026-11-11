import { cookies } from "next/headers";
import { decrypt } from "@/lib/sessions";
import Navbar from "./Navbar";


export default async function NavbarServer() {
  const cookieStore = await cookies()
  const token = cookieStore.get('session')?.value
  const session = token ? await decrypt(token) : null

  const user = session ? {name: session.email} : null
  return <Navbar user={user}/>
}
