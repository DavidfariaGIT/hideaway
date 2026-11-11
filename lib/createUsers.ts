import { getDBConnection } from "./db";

async function seedCart() {
    const db = await getDBConnection()

    await db.exec(`
        CREATE TABLE IF NOT EXISTS carts (
        id TEXT PRIMARY KEY,
        user_id TEXT UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS cart_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cart_id TEXT NOT NULL,
        product_id TEXT NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 1,
        UNIQUE(cart_id, product_id),
        FOREIGN KEY (cart_id) REFERENCES carts(id) ON DELETE CASCADE
        )
        `)
}

seedCart()