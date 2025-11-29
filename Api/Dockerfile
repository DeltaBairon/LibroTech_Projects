

FROM node:18-alpine

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente (incluyendo src/)
COPY . .

# Exponer el puerto
EXPOSE 4000

# Comando para iniciar desde src/
CMD ["node", "src/server.js"]