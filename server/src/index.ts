import express from 'express';
import cors from 'cors';
import { pool } from './pg';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});
app.get('/api/users', async(_req,res) => {
  const {rows} = await pool.query('SELECT * FROM users');
  res.json(rows);
})
app.get('/api/timovi', async(_req,res)=>{
  const {rows} = await pool.query(`SELECT timovi.naziv, users.ime, clanovi_tima.uloga_u_timu FROM clanovi_tima 
    JOIN users ON users.id = clanovi_tima.user_id JOIN timovi ON timovi.id = clanovi_tima.tim_id; `);
  res.json(rows);
})


app.listen(3001, () => {
  console.log('Server radi na http://localhost:3001');
});