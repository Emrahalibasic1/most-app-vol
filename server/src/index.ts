import express from 'express';
import cors from 'cors';
import './db';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.listen(3001, () => {
  console.log('Server radi na http://localhost:3001');
});