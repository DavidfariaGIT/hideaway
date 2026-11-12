import { cookies } from "next/headers"
import { decrypt } from "./sessions"
import { getDBConnection } from "./db"

export async function getCartItemCount() {
    const cookieStore = await cookies()
    const token = cookieStore.get('session')?.value
    const session = token ? await decrypt(token) : null

    const userId = session?.userId
    const guestCartId = cookieStore.get('cartId')?.value

    const db = await getDBConnection()

    try {
        let cartId: string | undefined

        if(userId) {
            const cart = await db.get('SELECT id FROM carts WHERE user_id = ?', [userId])
            cartId = cart?.id
        } else {
            cartId = guestCartId
        }

        if (!cartId) return 0

        const result = await db.get('SELECT COUNT(*) AS count FROM cart_items WHERE cart_id = ?', [cartId])

        return result?.count ?? 0
    } finally {
        await db.close()
    }



}