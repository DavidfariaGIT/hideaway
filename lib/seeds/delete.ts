import { getDBConnection } from "../db"

async function deleteRow() {
    const db = await getDBConnection()

    try {
        const id = 1
        const select = await db.run(`
                DELETE FROM users WHERE id = ${id}
            `)
    } catch (err) {
        console.error('error deleting user', err)
    }
}

deleteRow()