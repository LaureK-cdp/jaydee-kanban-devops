# Analyse de l'existant - Jaydee Kanban

## 1. Structure du projet
Le projet est une application Node.js développée avec **Express** et **TypeScript**. 
- **src/** : Contient le code source (app.ts et main.ts).
- **tests/** : Contient la suite de tests automatisés.
- **Dockerfile** : Pour la conteneurisation.
- **package.json** : Gestion des dépendances et scripts.

## 2. Diagnostic Technique
- **Dépendances principales** : Express (API), TypeScript (Langage), Vitest & Supertest (Tests).
- **Variables d'environnement** : `PORT` (par défaut 3000), `NODE_ENV`.
- **Anomalies constatées** : Absence initiale de tests unitaires et de pipeline d'automatisation.
- **Risques identifiés** : Failles de sécurité potentielles dans les dépendances (nécessite npm audit) et déploiements manuels instables.

## 3. Priorités avant mise en production
1. Mise en place de tests automatisés pour sécuriser les routes API.
2. Conteneurisation avec Docker pour garantir un environnement reproductible.
3. Automatisation du déploiement via GitHub Actions (CI/CD).
