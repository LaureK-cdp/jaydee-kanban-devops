# 1. Utiliser l'image légère suggérée
FROM node:20-alpine

# 2. Créer le dossier de travail dans le conteneur
WORKDIR /app

# 3. Copier les fichiers de dépendances en premier (optimisation)
COPY package*.json ./

# 4. Installer les dépendances
RUN npm install

# 5. Copier tout le reste du projet
COPY . .

# 6. Lancer l'application
CMD ["npm", "start"]