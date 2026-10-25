import { getDBConnection } from "./db"

export async function getProducts(sort:string | undefined, filter:string | undefined, search:string | undefined) {
    'use cache'
    const db = await getDBConnection()

    let sql = "SELECT * FROM products"
    const placeholder:string[] = []

    if(search) {
        sql += " WHERE title LIKE ? OR description LIKE ?"
        placeholder.push(`%${search}%`, `%${search}%`)
    }

    if(sort) {
        sql += " WHERE title LIKE ?"
        placeholder.push(`%${sort}%`) 
    }

    if(filter) {
        console.log('filer exists')
    }
   
    if(filter === 'year') {
        sql += ' ORDER BY year DESC'
    } 
    if(filter === 'a-z') {
        sql += ' ORDER BY title ASC'
    }
     if(filter === 'price') {
        sql += ' ORDER BY price ASC'
    }

    try {
        console.log(sql)
        return await db.all(sql, placeholder)
    } finally {
        await db.close()
    }
}