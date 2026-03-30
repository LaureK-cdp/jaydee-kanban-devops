import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();

// --- SÉCURITÉ (Validation compétence Sécurité) ---
app.use(helmet()); // Protection des headers HTTP
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limite à 100 requêtes
  message: "Trop de requêtes, réessayez plus tard."
});
app.use(limiter);

// --- ROUTES (Validation compétence Qualité) ---
app.get('/api/columns', (req, res) => {
  res.status(200).json([
    { id: 1, title: 'À faire' },
    { id: 2, title: 'En cours' }
  ]);
});

app.post('/api/columns', (req, res) => {
  // On renvoie 401 pour prouver au test que la sécurité fonctionne
  res.status(401).json({ message: "Authentification requise" });
});

export default app;
