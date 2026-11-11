'use server'

import { z } from "zod"
import deleteSession, { createSession } from "./sessions"
import { redirect } from "next/navigation"
import bcrypt from 'bcryptjs'
import { getDBConnection } from "./db"
import { create } from "domain"

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
