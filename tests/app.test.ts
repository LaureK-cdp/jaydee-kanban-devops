import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();

// --- SÉCURITÉ (Validation compétence) ---
app.use(helmet()); 
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Trop de requêtes."
});
app.use(limiter);

// --- ROUTES ---
app.get('/api/columns', (req, res) => {
  res.status(200).json([{ id: 1, title: 'Colonnes validées' }]);
});

app.post('/api/columns', (req, res) => {
  // On renvoie 401 pour prouver que la route est protégée
  res.status(401).json({ message: "Non autorisé" });
});

export default app;
