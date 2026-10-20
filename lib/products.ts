import { getDBConnection } from "./db"

export async function getProducts() {
    'use cache'
    const db = await getDBConnection()

    let sql = "SELECT * FROM products"
    const placeholder:string[] = []

    try {
        return await db.all(sql, placeholder)
    } finally {
        await db.close()
    }
}