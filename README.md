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


## 🌐 URLs de la Aplicación

* Frontend
  https://github.com/DeltaBairon/DeltaBairon-LibroTech_FrontEnd/tree/main

* Backend
  https://github.com/DeltaBairon/LibroTech_Backend

* APi
  https://github.com/DeltaBairon/LibroTech_Backend_nube



## 📁 Estructura del Repositorio
LibroTech_Projects/  
├── README.md  
├── CHECKLIST_COMPLETO.md  
├── docs/arquitectura.md  
├── docs/deployment.md  
├── docs/integracion.md  
├── screenshots/home.png  
├── screenshots/catalogo.png  
├── screenshots/form-crear.png  
├── screenshots/form-editar.png  
├── screenshots/kanban.png  
├── screenshots/flujo-completo.gif  
└── .github/project-board.png

## 🗂️ GitHub Project – Kanban
El tablero contiene 4 columnas: Backlog, In Progress, Testing y Done. Los 6 issues requeridos están completados, cada uno con su label correspondiente y repositorios vinculados. La captura del tablero se encuentra en screenshots/kanban.png.

## 🧪 Funcionalidades End-to-End
La aplicación permite crear, listar, editar y eliminar libros. Todas las operaciones están integradas entre el frontend, backend y la base de datos. Se verificó que la API responde con JSON válido, status 200 y datos persistentes.

## 🖼️ Capturas de Pantalla
Las capturas obligatorias están incluidas dentro de la carpeta screenshots/: home.png, catalogo.png, form-crear.png, form-editar.png, kanban.png y el GIF animado flujo-completo.gif (opcional). Todas muestran el funcionamiento real de la aplicación desplegada.

## 🎥 Video Demostrativo (5–7 min)
El video explica: introducción, arquitectura, GitHub Project, demo en vivo (crear, ver, editar, eliminar), integración en el Network Tab y cierre con aprendizajes. El enlace está disponible en la sección de URLs.

## 🚀 Deployment
El frontend está desplegado en Vercel, el backend en Render/Railway, y la base de datos en un servicio cloud. Las tres capas funcionan correctamente, integradas y sin errores. Se realizaron pruebas end-to-end para validar persistencia y comunicación entre servicios.

## 📄 Documentación
El repositorio incluye documentación técnica en la carpeta docs/: arquitectura.md (diseño y flujos), deployment.md (guía completa de despliegue) e integracion.md (detalles del flujo API + frontend). Toda la documentación está escrita en Markdown y validada.

## 🧩 Tecnologías Utilizadas
- Frontend: HTML, CSS, JavaScript, Fetch API, Vercel  
- Backend: Node.js, Express, CORS, Render/Railway  
- Base de Datos: MySQL / PostgreSQL / Supabase / PlanetScale  
- Control de Versiones: Git y GitHub  
- Otros: Markdown, Kanban, pruebas manuales, DevTools

## 🛠️ Instalación Local
1. Clonar repositorio: git clone https://github.com/DeltaBairon/LibroTech_Projects  
2. Backend: instalar dependencias con npm install y ejecutar con npm start.  
3. Configurar variables de entorno con la connection string.  
4. Frontend: abrir index.html o servir con un live server.  
5. Verificar conexión con la API desde el frontend.  

## 🐞 Problemas y Soluciones
1. Error CORS al consumir la API: solución → configurar app.use(cors()) en el backend.  
2. Fallo en la persistencia: la base de datos en Railway estaba en modo suspensión → habilitar Always On o ejecutar pings.

## 📘 Aprendizajes
1. Integración completa entre frontend, backend y base de datos.  
2. Manejo de API REST y validaciones.  
3. Deployment en diferentes servicios cloud.  
4. Uso profesional de GitHub Project para planificación.

## 👨‍💻 Autor
Nombre: [Tu nombre aquí]  
Email: [tuemail@example.com]  
Proyecto desarrollado como entrega final – LibroTech Full-Stack Integration.

## 📅 Fecha de Entrega
Noviembre 2025
