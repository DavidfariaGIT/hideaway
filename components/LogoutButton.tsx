
import { logout } from "@/lib/actions"

export default function LogoutButton() {
  return (
      <button onClick={logout} className="bg-black py-1 px-2 text-white rounded-[15px] cursor-pointer my-auto">Log out</button>
  )
}
