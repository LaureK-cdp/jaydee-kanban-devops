import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app'; 

describe('Tests d\'intégration - Qualité Fonctionnelle', () => {
  
  it('doit récupérer la liste des colonnes avec un code 200 (GET /api/columns)', async () => {
    const res = await request(app).get('/api/columns');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('title');
  });

  it('doit bloquer l\'accès sans authentification avec un code 401 (POST /api/columns)', async () => {
    const res = await request(app).post('/api/columns').send({ title: 'Nouvelle colonne' });
    // Cette preuve valide à la fois la Qualité et la Sécurité
    expect(res.status).toBe(401);
  });
});
