'use server'

import { cookies } from "next/headers"
import { getDBConnection } from "./db"

export async function mergeGuestCart(userId: string) {
    const cookieStore = await cookies()
    const guestCartId = cookieStore.get('cartId')?.value
    const db = await getDBConnection()

    if (!guestCartId) return

    try {
        await db.run('BEGIN TRANSACTION')

        const guestCart = await db.get(`SELECT id FROM carts WHERE id = ? and user_id IS NULL`, [guestCartId])

        if (!guestCart) {
            await db.run('COMMIT')
            return
        }

        const userCart = await db.get('SELECT id FROM carts WHERE user_id = ?', [userId])

        if (!userCart) {
            await db.run('UPDATE carts SET user_id = ? WHERE cart_id = ?', [userId, guestCartId])
        } else {
            const guestItems = await db.all(`SELECT product_id, quantity FROM cart_items WHERE cart_id = ?`, [guestCartId])

            for (const item of guestItems) {
                await db.run(`
                INSERT INTO cart_items (cart_id, product_id, quantity) VALUES(?, ?, ?)
                ON CONFLICT(cart_id, product_id) 
                DO UPDATE SET quantity + quantity + excluded.quantity`,
                    [userCart.id, item.product_id, item.quantity]
                )
            }
        }

        await db.run('DELETE FROM carts WHERE id = ?', [guestCartId])

        await db.run('COMMIT')
        cookieStore.delete('cartId')
    } catch (error) {
        await db.run('ROLLBACK')
        throw error
    }
}