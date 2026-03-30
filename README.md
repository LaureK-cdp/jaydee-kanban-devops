# Jaydee Kanban - Déploiement Sécurisé

Application API pour la gestion de colonnes Kanban, développée en TypeScript avec Express.

## ✅ Corrections apportées (Version Rattrapage)

Suite aux retours du correcteur, les points suivants ont été corrigés pour valider les compétences du Bloc 3 :

- **Tests et Qualité :** Mise en place de vrais tests d'intégration avec `Supertest` et `Vitest` dans `src/tests/api.test.ts`. Nous testons désormais les routes réelles, les codes de statut HTTP (200, 401) et la structure des réponses JSON.
- **Sécurité :** Activation technique des middlewares de sécurité. `helmet` est utilisé pour sécuriser les headers HTTP et `express-rate-limit` est configuré pour prévenir les attaques par force brute.
- **Conteneurisation :** Fiabilisation de la chaîne de build. Séparation du serveur (`src/main.ts`) et de l'application (`src/app.ts`) pour garantir une compilation TypeScript sans erreur et un build Docker reproductible.
- **Documentation :** Refonte complète du README pour refléter l'architecture réelle et simplifiée du projet.

## 🛠️ Installation et Tests

1. **Installer les dépendances :**
   ```bash
   npm install
