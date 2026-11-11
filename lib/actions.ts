'use server'

import { z } from "zod"
import deleteSession, { createSession, decrypt } from "./sessions"
import { redirect } from "next/navigation"
import bcrypt from 'bcryptjs'
import { getDBConnection } from "./db"
import { create } from "domain"
import { cookies } from "next/headers"
import { randomUUID } from "crypto"

const testUser = {
    id: '1',
    email: 'testman@test.com',
    password: 'testman'
}

const registerSchema = z.object({
    name: z.string().min(3, 'Name must be atleast 3 characters'),
    email: z.string().email({ message: 'Invalid email address' }).trim(),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 8 characters' })
        .trim(),
})

export async function registerUser(prevState: any, formData: FormData) {
    const result = registerSchema.safeParse(Object.fromEntries(formData))

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    const { name, email, password } = result.data

    try {
        const db = await getDBConnection()

        const existing = await db.get(`SELECT id FROM users WHERE name = ? OR email = ?`, [name, email])

        if (existing) {
            return { message: "User already exists, please try again" }
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await db.run(`INSERT INTO users (name, email, password) VALUES(?, ?, ?)`, [name, email, hashedPassword])
        await createSession(existing.id)

        redirect('/login')

    } catch (error) {
        return { message: 'Database error: failed to register user' }
    }



}

const loginSchema = registerSchema.omit({ name: true })

export async function login(preState: any, formData: FormData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData))

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    const { email, password } = result.data

    if (email !== testUser.email || password !== testUser.password) {
        return {
            errors: {
                email: ["Invaild email or password"],
            }
        }
    }

    try {
        const db = await getDBConnection()

        const user = await db.get(`SELECT * FROM users WHERE email = ?`, [email])

        if (!user) {
            return { message: 'Invalid credentials' }
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            return { message: 'Invalid credentials' }
        }

        await createSession(user.id)

    } catch (error) {
        return { message: 'Database error: failed to register user' }
    }

    redirect('/')
}

export async function logout() {
    await deleteSession()
    redirect('/')
}


//cart

export async function addToCart(productId: string, quantity: number = 1) {
    const cookieStore = await cookies()
    const guestCartId = cookieStore.get('cartId')?.value
    const token = cookieStore.get('session')?.value
    const session = token ? await decrypt(token) : null
    const userId = typeof session?.userId === 'string' ? session.userId : undefined

    const db = await getDBConnection()
    type Cart = { id: string; user_id: string | null }

    let cart: Cart | undefined

    if (userId) {
        cart = await db.get<Cart>(
            `SELECT id, user_id FROM carts WHERE user_id = ?`,
            [userId],
        )

        if (!cart) {
            const newId = randomUUID()
            await db.run(`INSERT INTO carts (id, user_id) VALUES (?, ?)`, [newId, userId])
            cart = { id: newId, user_id: userId }
        }
    } else if (guestCartId) {
        cart = await db.get<Cart>(
            `SELECT id, user_id FROM carts WHERE id = ?`,
            [guestCartId],
        )
    }

    if (!cart) {
        const newId = randomUUID()
        await db.run('INSERT INTO carts (id, user_id) VALUES (?, NULL)', [newId])
        cart = { id: newId, user_id: null }

        cookieStore.set('cartId', cart.id, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 5,
            sameSite: 'lax',
            path: '/',
        })
    }

    await db.run(`
          INSERT INTO cart_items (cart_id, product_id, quantity) VALUES(?, ?, ?)
          ON CONFLICT(cart_id, product_id)
          DO UPDATE SET quantity = quantity + excluded.quantity  
        `, [cart.id, productId, quantity])

}
