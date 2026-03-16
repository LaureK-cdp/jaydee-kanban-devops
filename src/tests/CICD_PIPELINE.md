# Stratégie CI/CD - Jaydee Kanban

Ce document décrit la stratégie d'intégration et de déploiement continus mise en place pour l'application Jaydee Kanban.

## 1. Objectifs de la CI/CD
L'objectif est d'automatiser la validation du code à chaque modification pour :
- Garantir que les nouveaux développements ne cassent pas l'existant (Tests d'intégration).
- Vérifier que l'application peut toujours être "buildée" (compilation TypeScript).
- Assurer la sécurité en automatisant l'analyse des dépendances.

## 2. Déclencheurs (Triggers)
Le pipeline s'exécute automatiquement lors de :
- Chaque **Push** sur la branche `main`.
- Chaque **Pull Request** vers la branche `main`.

## 3. Configuration du Pipeline (GitHub Actions)

Voici le contenu du fichier `.github/workflows/main.yml` :

```yaml
name: CI Jaydee Kanban

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Récupérer le code
        uses: actions/checkout@v4

      - name: Installer Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Installer les dépendances
        run: npm install

      - name: Vérifier la compilation (Build)
        run: npm run build

      - name: Exécuter les tests d'intégration
        run: npm test

      - name: Analyse de sécurité (Audit)
        run: npm audit
