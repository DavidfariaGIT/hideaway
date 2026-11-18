import CartDisplay from "./CartDisplay";
import { getCartItems } from "@/lib/cart";
import { deleteCartItem } from "@/lib/cart"

export default async function CartBrowser() {
  const cartItems = await getCartItems()
  return <CartDisplay items={cartItems} deleteItem={deleteCartItem}/>
}
