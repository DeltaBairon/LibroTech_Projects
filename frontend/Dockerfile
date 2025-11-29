
# Dockerfile para tu Frontend Vanilla
# Guarda esto como: frontend/Dockerfile

FROM nginx:alpine

# Copiar todos los archivos estáticos al directorio de Nginx
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/

# Copiar configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Nginx se inicia automáticamente
CMD ["nginx", "-g", "daemon off;"]