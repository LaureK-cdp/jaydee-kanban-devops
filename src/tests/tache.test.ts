import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app';

describe('API Kanban - Tâches', () => {
  it('doit créer une nouvelle tâche avec le statut À faire', async () => {
    const response = await request(app)
      .post('/api/taches')
      .send({ intitule: 'Nouvelle tâche API' });

    expect(response.status).toBe(201);
    expect(response.body.data.colonne).toBe('À faire');
  });
});
