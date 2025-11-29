# 🚀 Proyecto Integrado Full Stack

![HTML5](https://img.shields.io/badge/HTML5-Markup-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-Framework-black?logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14%2B-blue?logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-20.10%2B-blue?logo=docker)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-Orchestration-2496ED?logo=docker)

### ☁️ Cloud & Deployment
![AWS](https://img.shields.io/badge/AWS-Deployed-orange?logo=amazonaws)
![AWS EC2](https://img.shields.io/badge/AWS%20EC2-Compute-FF9900?logo=amazonec2)
![AWS S3](https://img.shields.io/badge/AWS%20S3-Storage-569A31?logo=amazons3)
![Azure](https://img.shields.io/badge/Azure-Deployed-blue?logo=microsoftazure)
![Azure App Service](https://img.shields.io/badge/Azure%20App%20Service-Web%20App-0078D4?logo=microsoftazure)
![Azure SQL](https://img.shields.io/badge/Azure%20SQL-Database-0078D4?logo=microsoftazure)

### 🛠️ Development Tools
![VSCode](https://img.shields.io/badge/VS%20Code-Editor-blue?logo=visualstudiocode)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?logo=githubactions)
![NPM](https://img.shields.io/badge/NPM-Package%20Manager-red?logo=npm)

### 📊 Project Status
![Status](https://img.shields.io/badge/Status-Production-brightgreen?logo=checkmarx)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?logo=semver)
![License](https://img.shields.io/badge/License-MIT-green?logo=opensourceinitiative)
![Build](https://img.shields.io/badge/Build-Passing-success?logo=github)

# 📚 LibroTech – Proyecto Full-Stack Integrado
Sistema completo para la gestión de una biblioteca virtual, desarrollado como proyecto de integración Full-Stack. 
Incluye frontend, backend, base de datos en la nube, tablero Kanban, documentación técnica y video demostrativo.

## 🚀 Descripción General
LibroTech es una aplicación web Full-Stack que permite realizar operaciones CRUD sobre un catálogo de libros. Incluye:
frontend responsive, API REST con validaciones, base de datos en la nube, integración end-to-end, deployment completo, documentación profesional y tablero Kanban con 6 issues completados.

## 🏗️ Arquitectura de la Aplicación
La arquitectura está compuesta por tres capas principales: (1) Frontend desplegado en Vercel, 
(2) Backend API en Render/Railway,
(3) Base de datos en la nube (Railway / Supabase / PlanetScale). Flujo general: Frontend → API REST → Base de Datos → Respuesta JSON → UI Actualizada. Diagrama detallado disponible en docs/arquitectura.md.

```
┌──────────────┐
│   USUARIO    │
└──────┬───────┘
       │ 1. Interacción
       ▼
┌──────────────────────────────────────────────┐
│                 FRONTEND                      │
│        (HTML + CSS + JavaScript)              │
├──────────────────────────────────────────────┤
│                                              │
│  2. Validación de Datos                      │
│  3. Construcción de Request                   │
│                                              │
│  fetch(API_URL + '/api/libros', {             │
│    method: 'POST',                            │
│    headers: {                                 │
│      'Content-Type': 'application/json'       │
│    },                                         │
│    body: JSON.stringify(datos)                │
│  })                                           │
└───────────────┬──────────────────────────────┘
                │ 4. HTTP Request (JSON)
                ▼
┌──────────────────────────────────────────────┐
│                 BACKEND API                   │
│      (Python Flask / Node.js Express)         │
├──────────────────────────────────────────────┤
│                                              │
│  5. Recepción de Request                      │
│  6. Validación en Servidor                    │
│  7. Lógica de Negocio                         │
│                                              │
│  @app.route('/api/libros', methods=['POST'])  │
│  def crear_libro():                           │
│    datos = request.json                       │
│    # Validar datos                            │
│    # Construir query SQL                      │
└───────────────┬──────────────────────────────┘
                │ 8. SQL Query
                ▼
┌──────────────────────────────────────────────┐
│                BASE DE DATOS                  │
│             (MySQL / PostgreSQL)              │
├──────────────────────────────────────────────┤
│                                              │
│  9. Ejecutar Query                            │
│  10. Validar Integridad                       │
│  11. Guardar Datos                            │
│                                              │
│  INSERT INTO libros                           │
│  (titulo, autor, isbn)                        │
│  VALUES (?, ?, ?)                             │
└───────────────┬──────────────────────────────┘
                │ 12. Resultado
                ▼
┌──────────────────────────────────────────────┐
│                 BACKEND API                   │
├──────────────────────────────────────────────┤
│  13. Formatear Respuesta                      │
│  14. Agregar Status Codes                     │
│                                              │
│  return {                                     │
│    "status": "success",                       │
│    "data": {                                  │
│      "id": 1,                                 │
│      "titulo": "...",                         │
│      "autor": "..."                           │
│    }                                          │
│  }                                            │
└───────────────┬──────────────────────────────┘
                │ 15. HTTP Response (JSON)
                ▼
┌──────────────────────────────────────────────┐
│                 FRONTEND                      │
├──────────────────────────────────────────────┤
│  16. Parsear Respuesta                        │
│  17. Actualizar UI                            │
│  18. Mostrar Feedback                         │
│                                              │
│  .then(response => response.json())           │
│  .then(data => {                              │
│    mostrarMensaje('Libro creado');            │
│    actualizarLista();                         │
│  })                                           │
└───────────────┬──────────────────────────────┘
                │ 19. Resultado visual
                ▼
┌──────────────┐
│   USUARIO    │
│  (Ve cambio) │
└──────────────┘
```


## 🌐 URLS de la Aplicación

* APP DESPLEGADA
  http://98.83.32.68/

* Frontend
  https://github.com/DeltaBairon/DeltaBairon-LibroTech_FrontEnd/tree/main

* APi 
  https://github.com/DeltaBairon/LibroTech_Backend

* Backend
  https://github.com/DeltaBairon/LibroTech_Backend_nube

# 📚 LibroTech - Sistema de Gestión de Librería

Sistema completo de gestión de librería con API REST y frontend vanilla, desplegado en AWS EC2 usando Docker.

## 🚀 Características

- **API REST** con Node.js + Express
- **Frontend Vanilla** (HTML, CSS, JavaScript)
- **Base de datos** PostgreSQL en Azure
- **Contenedorización** con Docker y Docker Compose
- **Proxy inverso** con Nginx
- **Desplegado en AWS EC2**

---

## 📋 Requisitos Previos

### Para desarrollo local:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado
- [Git](https://git-scm.com/) instalado
- Cuenta de [Azure Database for PostgreSQL](https://azure.microsoft.com/es-es/products/postgresql/)

### Para despliegue en producción:
- Cuenta de [AWS](https://aws.amazon.com/)
- Instancia EC2 (t2.micro es suficiente)
- Par de llaves SSH configurado

---

## 🏗️ Arquitectura del Proyecto

```
LibroTech/
├── docker-compose.yml          # Orquestación de contenedores
├── .env                        # Variables de entorno (no incluido en repo)
├── .env.example               # Plantilla de variables de entorno
├── Api/
│   ├── Dockerfile             # Imagen Docker para API
│   ├── .dockerignore
│   ├── package.json
│   └── src/
│       ├── server.js          # Punto de entrada
│       ├── app.js             # Configuración Express
│       ├── db.js              # Conexión a base de datos
│       ├── controllers/       # Lógica de negocio
│       └── routes/            # Definición de rutas
└── frontend/
    ├── Dockerfile             # Imagen Docker para frontend
    ├── nginx.conf             # Configuración Nginx
    ├── .dockerignore
    ├── index.html
    ├── css/
    │   └── styles.css
    └── js/
        └── app.js             # Lógica del frontend
```

---

## 🔧 Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/librotech.git
cd librotech
```

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Configuración de la API
NODE_ENV=production
PORT=4000

# Base de datos PostgreSQL (Azure)
DB_HOST=tu-servidor.postgres.database.azure.com
DB_PORT=5432
DB_NAME=nombre_base_datos
DB_USER=tu_usuario@tu-servidor
DB_PASSWORD=tu_password_seguro
```

> ⚠️ **Nota:** Nunca subas el archivo `.env` al repositorio. Usa `.env.example` como plantilla.

---

## 🐳 Despliegue con Docker

### Desarrollo Local

```bash
# Construir las imágenes
docker-compose build

# Levantar los servicios
docker-compose up

# O en modo detached (segundo plano)
docker-compose up -d

# Ver logs
docker-compose logs -f
```

La aplicación estará disponible en:
- **Frontend:** http://localhost
- **API:** http://localhost:4000

### Comandos útiles

```bash
# Ver contenedores en ejecución
docker-compose ps

# Detener servicios
docker-compose down

# Reconstruir sin caché
docker-compose build --no-cache

# Ver logs de un servicio específico
docker-compose logs -f api
docker-compose logs -f frontend

# Ver recursos utilizados
docker stats
```

---

## ☁️ Despliegue en AWS EC2

### 1. Crear Instancia EC2

1. Accede a [AWS Console](https://console.aws.amazon.com/)
2. Ve a **EC2 > Launch Instance**
3. Configura:
   - **Name:** LibroTech-Server
   - **AMI:** Ubuntu Server 24.04 LTS
   - **Instance type:** t2.micro
   - **Key pair:** Crea o selecciona una llave SSH
   - **Security Group:** Configura los siguientes puertos:
     - Puerto 22 (SSH) - Tu IP
     - Puerto 80 (HTTP) - 0.0.0.0/0
     - Puerto 4000 (API) - 0.0.0.0/0 [opcional]

### 2. Conectar a la instancia

```bash
ssh -i tu-llave.pem ubuntu@tu-ip-publica
```

### 3. Instalar Docker y Docker Compose

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu

# Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Cerrar sesión y volver a entrar
exit
ssh -i tu-llave.pem ubuntu@tu-ip-publica

# Verificar instalación
docker --version
docker-compose --version
```

### 4. Desplegar la aplicación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/librotech.git
cd librotech

# Crear archivo .env con las credenciales reales
nano .env
# (Pega las variables de entorno y guarda: Ctrl+O, Enter, Ctrl+X)

# Construir y levantar servicios
docker-compose build
docker-compose up -d

# Verificar que estén corriendo
docker-compose ps

# Ver logs
docker-compose logs -f
```

### 5. Acceder a la aplicación

Abre tu navegador y visita:
- **Frontend:** `http://TU_IP_PUBLICA`
- **API:** `http://TU_IP_PUBLICA/api/libros`

---

## 🔄 Actualizar la Aplicación

### En desarrollo local

```bash
git pull
docker-compose down
docker-compose build
docker-compose up -d
```

### En producción (EC2)

```bash
# Conectar a EC2
ssh -i tu-llave.pem ubuntu@tu-ip-publica

# Ir al directorio del proyecto
cd ~/librotech

# Actualizar código
git pull

# Reconstruir y reiniciar
docker-compose down
docker-compose build
docker-compose up -d

# Verificar logs
docker-compose logs -f
```

---

## 📡 Endpoints de la API

### Libros

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/libros` | Obtener todos los libros |
| GET | `/libros/:id` | Obtener un libro por ID |
| POST | `/libros` | Crear un nuevo libro |
| PUT | `/libros/:id` | Actualizar un libro |
| DELETE | `/libros/:id` | Eliminar un libro |

### Ejemplo de petición

```bash
# Obtener todos los libros
curl http://localhost:4000/libros

# Crear un libro
curl -X POST http://localhost:4000/libros \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "El Quijote",
    "autor": "Miguel de Cervantes",
    "isbn": "978-8491050308",
    "precio": 25.50
  }'
```

---

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** v18.20.8
- **Express** v5.1.0
- **PostgreSQL** (Azure Database)
- **pg** v8.16.3 (Cliente PostgreSQL)
- **dotenv** v17.2.3
- **cors** v2.8.5

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

### DevOps
- **Docker** & **Docker Compose**
- **Nginx** (Proxy inverso)
- **AWS EC2** (Hosting)

---

## 🐛 Troubleshooting

### Error: "Cannot use import statement outside a module"

**Solución:** Asegúrate de que `Api/package.json` tenga:
```json
{
  "type": "module"
}
```

### Error: "ECONNREFUSED connecting to database"

**Solución:** Verifica las variables de entorno en `.env`:
```bash
docker exec -it librotech-api env | grep DB_
```

### Error: Frontend no carga

**Solución:** Verifica los logs de Nginx:
```bash
docker-compose logs frontend
docker exec -it librotech-frontend nginx -t
```

### Error: Puerto 80 ya en uso

**Solución:** Detén el servicio que está usando el puerto:
```bash
sudo lsof -i :80
# O cambia el puerto en docker-compose.yml
```

---

## 📝 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NODE_ENV` | Entorno de ejecución | `production` |
| `PORT` | Puerto de la API | `4000` |
| `DB_HOST` | Host de PostgreSQL | `servidor.postgres.database.azure.com` |
| `DB_PORT` | Puerto de PostgreSQL | `5432` |
| `DB_NAME` | Nombre de la base de datos | `librotech_db` |
| `DB_USER` | Usuario de PostgreSQL | `admin@servidor` |
| `DB_PASSWORD` | Contraseña de PostgreSQL | `password_seguro` |

---

## 🔒 Seguridad

- ✅ Variables de entorno no incluidas en el repositorio
- ✅ Contenedores ejecutándose con usuarios no-root
- ✅ CORS configurado en la API
- ✅ Security Groups configurados en AWS
- ✅ Conexión SSL a base de datos PostgreSQL

### Recomendaciones adicionales:

- Usa HTTPS con Let's Encrypt en producción
- Implementa autenticación JWT
- Habilita rate limiting en la API
- Configura backups automáticos de la base de datos

---

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

---

## 👥 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Contacto

**Proyecto:** LibroTech - Sistema de Gestión de Librería

**Repositorio:** [https://github.com/tu-usuario/librotech](https://github.com/tu-usuario/librotech)

---

## ✨ Agradecimientos

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [AWS](https://aws.amazon.com/)
- [Azure](https://azure.microsoft.com/)
