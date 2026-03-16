import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route principale pour tester que l'API fonctionne
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: "API Jaydee Kanban opérationnelle",
    status: "success",
    version: "1.0.0"
  });
});

// Route pour simuler la récupération des tâches
app.get('/tasks', (req: Request, res: Response) => {
  res.status(200).json([
    { id: 1, title: "Analyse des besoins", status: "Done" },
    { id: 2, title: "Configuration CI/CD", status: "In Progress" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

export default app;
