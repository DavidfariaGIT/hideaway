import { cookies } from "next/headers"
import { decrypt } from "./sessions"
import { getDBConnection } from "./db"
import { revalidatePath } from "next/cache"

export async function getCartItemCount() {
    const cookieStore = await cookies()
    const token = cookieStore.get('session')?.value
    const session = token ? await decrypt(token) : null

    const userId = session?.userId
    const guestCartId = cookieStore.get('cartId')?.value

    const db = await getDBConnection()

    try {
        let cartId: string | undefined

        if (userId) {
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

export async function getCartItems() {
    const cookieStore = await cookies()
    const token = cookieStore.get('session')?.value
    const session = token ? await decrypt(token) : null

    const userId = session?.userId
    const guestCartId = cookieStore.get('cartId')?.value

    const db = await getDBConnection()
    let cartId

    try {
        if (userId) {
            const cart = await db.get('SELECT id FROM carts WHERE user_id = ?', [userId])
            cartId = cart.id
        } else {
            cartId = guestCartId
        }
        const cart = await db.all('SELECT products.id, products.title, products.brand, products.price, products.image, products.description, cart_items.quantity FROM cart_items JOIN products ON products.id = cart_items.product_id WHERE cart_items.cart_id = ?', [cartId])
        return cart

    } finally {
        await db.close()
    }
}

export async function deleteCartItem(id:number) {
    'use server'

    const cookieStore = await cookies()
    const token = cookieStore.get('session')?.value
    const session = token ? await decrypt(token) : null

    const userId = session?.userId
    const guestCartId = cookieStore.get('cartId')?.value

    const db = await getDBConnection()
    let cartId

    try {
        if (userId) {
            const cart = await db.get('SELECT id FROM carts WHERE user_id = ?', [userId])
            cartId = cart.id
        } else {
            cartId = guestCartId
        }
        
        await db.run('DELETE FROM cart_items WHERE cart_id = ? AND product_id = ?', [cartId, id])
        revalidatePath("/cart")

    } finally {
        await db.close()
    }
}
