# Audit et Mesures de Sécurité - Jaydee Kanban

## 1. Analyse des Risques
Lors de l'analyse du code Node.js existant, plusieurs risques ont été identifiés :
- **Attaques par déni de service (DoS)** : Absence de limite de requêtes.
- **Vulnérabilités des en-têtes HTTP** : Informations sensibles exposées sur la technologie utilisée.
- **Injections** : Nécessité de valider les entrées utilisateurs.

## 2. Mesures de Sécurité Appliquées

### Helmet.js
Nous avons intégré le middleware `helmet` dans `src/app.ts`. Il permet de sécuriser les en-têtes HTTP en :
- Masquant l'en-tête `X-Powered-By` (empêchant de savoir que nous utilisons Express).
- Activant la protection XSS.
- Configurant la Content Security Policy (CSP).

### Express Rate Limit
Pour prévenir les attaques par force brute et les DoS, une limitation de débit a été mise en place :
- **Configuration** : 100 requêtes maximum par fenêtre de 15 minutes par adresse IP.

### Audit des dépendances
Le pipeline CI/CD intègre désormais une étape `npm audit` qui vérifie automatiquement à chaque mise à jour si les bibliothèques utilisées présentent des failles de sécurité connues.
