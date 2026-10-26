import "dotenv/config"
import { Pool } from "pg"

const pool = new Pool({connectionString: process.env.DATABASE_URL});

async function main() {
    const rezultat = await pool.query("SELECT id,ime,email,password_hash FROM users");
    console.log(rezultat.rows);
    await pool.end();
}

main();