# Stratégie de Sécurité et Tests

## Tests d'intégration (Qualité)
Nous utilisons **Vitest** et **Supertest** pour automatiser les vérifications.
- Les tests simulent des requêtes réelles.
- Nous vérifions systématiquement les codes de retour HTTP (200 pour le succès, 401 pour l'absence d'authentification, 404 pour l'introuvable).

## Mesures de sécurité appliquées
Pour protéger l'API contre les attaques courantes, les outils suivants ont été intégrés :
1. **Helmet** : Sécurise les en-têtes HTTP pour masquer les détails techniques du serveur.
2. **Express-rate-limit** : Limite le nombre de requêtes par utilisateur pour éviter les attaques par force brute (DoS).
3. **Authentification JWT** : Seuls les utilisateurs connectés avec un jeton valide peuvent modifier les données des colonnes et des OFs.
4. **GitHub Secrets** : Les clés sensibles (`JWT_SECRET`) ne sont jamais écrites en dur dans le code.
