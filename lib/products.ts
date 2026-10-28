import { getDBConnection } from "./db"

export async function getProducts(sort: string | undefined, filter: string | undefined, search: string | undefined, page: number | undefined, productsPerPage: number | undefined) {
    'use cache'
    const db = await getDBConnection()

    let sql = "SELECT * FROM products"
    const placeholder = []

    if (search) {
        sql += " WHERE title LIKE ? OR description LIKE ?"
        placeholder.push(`%${search}%`, `%${search}%`)
    }

    if (sort) {
        sql += " WHERE title LIKE ?"
        placeholder.push(`%${sort}%`)
    }

    if (filter) {
        console.log('filer exists')
    }

    if (filter === 'year') {
        sql += ' ORDER BY year DESC'
    }
    if (filter === 'a-z') {
        sql += ' ORDER BY title ASC'
    }
    if (filter === 'price') {
        sql += ' ORDER BY price ASC'
    }

    if (page && productsPerPage) {
        const offset = (page - 1) * productsPerPage
        sql += ' LIMIT ? OFFSET ?'
        placeholder.push(productsPerPage, offset)
    }

    try {
        console.log(sql)
        return await db.all(sql, placeholder)
    } finally {
        await db.close()
    }
}

export async function getProductsCount({ search }:{
    search: string | undefined
}) {
    const db = await getDBConnection()

    let sql = `SELECT COUNT(*) as count FROM products`
    const placeholder = []

    if (search) {
        sql += " WHERE (title LIKE ? OR description LIKE ?)"
        placeholder.push(`%${search}%`, `%${search}%`)
    }

    try {
        const result = await db.get(sql, placeholder)
        return result.count
    } finally {
        await db.close()
    }

}