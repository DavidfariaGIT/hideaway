import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
  
export async function getDBConnection() {
  
  const dbPath = path.join(process.cwd(), 'hideaway-db') 
  
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  })

  await db.exec('PRAGMA foreign_keys = ON')
  await db.exec('PRAGMA journal_mode = WAL')

  return db
}