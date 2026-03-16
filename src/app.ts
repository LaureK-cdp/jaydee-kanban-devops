import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();
app.use(express.json());
app.use(helmet()); // Sécurité Question 6

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// Route d'exemple pour ton Kanban
app.post('/api/taches', (req, res) => {
  const { intitule } = req.body;
  res.status(201).json({ message: "Tâche créée", data: { intitule, colonne: "À faire" } });
});

export default app;x
