import Database from 'better-sqlite3';

export const db = new Database('data.db');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ime TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('admin','koordinator','volonter')),
    jezik TEXT DEFAULT 'bs',
    tema TEXT DEFAULT 'system',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);