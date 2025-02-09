# Usar una imagen base específica para Maven y JDK
FROM node:18-alpine

# Crear el usuario jenkins con un UID específico
RUN useradd -m -u 1000 -s /bin/bash jenkins

# Establecer el usuario jenkins como el usuario predeterminado
USER jenkins

# Directorio de trabajo predeterminado
WORKDIR /home/app

# Copiar los archivos de dependencias
COPY package.json package-lock.json ./

# Añadir cualquier dependencia adicional que puedas necesitar
RUN npm ci

# Compilar la aplicación (si es necesario)
RUN npm run build

# Comando por defecto para iniciar la app
CMD ["npm", "start"]
