# Étape 1 : Construction (Build)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Exécution (Production)
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
# On n'installe que les dépendances nécessaires à l'exécution
RUN npm install --only=production
# On récupère le dossier dist généré à l'étape 1
COPY --from=builder /app/dist ./dist

EXPOSE 3000
# On lance le fichier main.js qui est le point d'entrée
CMD ["node", "dist/main.js"]
