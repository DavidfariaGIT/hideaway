import { getDBConnection } from "../db";
import users from '@/data/users.json'


async function seedProducts() {
 const db = await getDBConnection()

 await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    dateAdded DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    `)

const insertUsers = db.prepare(`
        INSERT OR REPLACE INTO users (
        id,
        name,
        email,
        password
        ) VALUES (?, ?, ?, ?)
    `)


for (const user of users) {
(await insertUsers).run(
        user.id,
        user.name,
        user.email,
        user.password
)
}

 (await insertUsers).finalize()
  await db.close()

  console.log('seeding users table completed')
}

seedProducts().catch((error) => {
console.error('error seeding users', error)
})