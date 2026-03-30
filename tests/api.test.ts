import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app'; // Vérifiez que votre fichier app.ts exporte 'app'

describe('Tests d\'intégration API Kanban', () => {
  it('doit retourner la liste des colonnes (GET /api/columns)', async () => {
    const res = await request(app).get('/api/columns');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('doit rejeter un accès non autorisé (POST /api/columns)', async () => {
    const res = await request(app).post('/api/columns').send({ title: 'Test' });
    // Prouve que la sécurité est active
    expect(res.status).toBe(401); 
  });
});
