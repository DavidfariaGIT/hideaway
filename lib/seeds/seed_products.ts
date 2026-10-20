import { getDBConnection } from "../db";
import products from "@/app/data/products.json"

async function seedProducts() {
 const db = await getDBConnection()

 await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    brand TEXT NOT NULL,
    title TEXT NOT NULL,
    price INTEGER NOT NULL DEFAULT 0.00,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    sizes TEXT,
    year INTEGER,
    dateAdded DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    `)

const insertProducts = db.prepare(`
        INSERT OR REPLACE INTO products (
        id,
        title,
        brand,
        price,
        image,
        description,
        sizes,
        year
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `)


for (const product of products) {
(await insertProducts).run(
        product.id,
        product.title,
        product.brand,
        product.price,
        product.image,
        product.description,
        product.sizes,
        product.year
)
}

 (await insertProducts).finalize()
  await db.close()

  console.log('seeding products table completed')
}

seedProducts().catch((error) => {
console.error('error seeding products', error)
})