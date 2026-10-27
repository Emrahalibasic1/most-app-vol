import "dotenv/config"
import { Pool } from "pg"

const pool = new Pool({connectionString: process.env.DATABASE_URL});

async function main() {
    const rezultat = await pool.query("SELECT id,ime,email,password_hash FROM users");
    const prikaz = await pool.query("SELECT id naziv,boja,arhiviran FROM timovi");
    console.log(rezultat.rows);
    console.log(prikaz.rows);
    await pool.end();
}

main();