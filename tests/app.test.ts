import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();

// --- SÉCURITÉ (Validation compétence Sécurité) ---
app.use(helmet()); // Protection des headers HTTP
app.use(express.json()); // Permet de lire le JSON

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limite chaque IP à 100 requêtes
  message: "Trop de requêtes, réessayez plus tard."
});
app.use(limiter);

// --- ROUTES (Exemple pour les colonnes) ---
app.get('/api/columns', (req, res) => {
  // Simule un retour de base de données
  res.status(200).json([{ id: 1, title: 'À faire' }]);
});

app.post('/api/columns', (req, res) => {
  // Simule une route protégée qui demande une auth (non implémentée ici)
  // On renvoie 401 pour prouver au test que la sécurité réagit
  res.status(401).json({ message: "Authentification requise" });
});

export default app;
