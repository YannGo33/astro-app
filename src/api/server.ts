import express from 'express';
import opticsRoutes from './routes/optics.routes.js';

const app = express();

app.use(express.json());

// routes
app.use('/api/optics', opticsRoutes);

// health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});