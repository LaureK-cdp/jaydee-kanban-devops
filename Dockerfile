# 1. Utilisation d'une image Node.js légère (version 20)
FROM node:20-alpine

# 2. Définition du dossier de travail dans le conteneur
WORKDIR /app

# 3. Copie des fichiers de configuration pour l'installation
COPY package*.json ./

# 4. Installation des dépendances
RUN npm install

# 5. Copie de tout le reste du code source
COPY . .

# 6. Compilation du TypeScript en JavaScript
RUN npm run build

# 7. Exposition du port utilisé par l'application
EXPOSE 3000

# 8. Commande de lancement de l'application
CMD ["npm", "start"]
