# Synthèse Technique - Jaydee Kanban

## Analyse de l'existant
L'application est une API REST développée en **Node.js** avec le framework **Express**. 
- **TypeScript** : Utilisé pour sécuriser le code et détecter les erreurs à la compilation.
- **Mongoose** : Sert d'interface avec la base de données MongoDB.
- **Zod** : Assure la validation des données entrantes.

## Démarche de réalisation
1. **Analyse** : Identification des scripts du `package.json` et des risques potentiels.
2. **Conteneurisation** : Création d'un environnement isolé avec Docker.
3. **Automatisation** : Mise en place d'une CI (GitHub Actions) pour garantir que chaque modification est testée.

## Conclusion
Le choix de cette stack technique assure une application robuste, facile à tester et rapide à déployer grâce à la conteneurisation.
