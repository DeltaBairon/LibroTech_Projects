# 📚 LibroTech - Sistema de Gestión de Librería

Sistema frontend completo para gestión de librería con operaciones CRUD para Libros, Autores, Categorías y Editoriales.

## 🚀 Características

- ✅ Dashboard con estadísticas en tiempo real
- ✅ CRUD completo para todas las entidades
- ✅ Diseño futurista y corporativo
- ✅ Totalmente responsive
- ✅ Búsqueda en tiempo real
- ✅ Notificaciones toast
- ✅ Modales de confirmación para eliminar
- ✅ Animaciones fluidas

## 📁 Estructura del Proyecto

```
libreria-frontend/
│
├── index.html          # Página principal
├── README.md           # Este archivo
│
├── css/
│   └── styles.css      # Estilos completos
│
└── js/
    └── app.js          # Lógica de la aplicación
```

## 🛠️ Instalación

1. **Crear la estructura de carpetas:**
   ```bash
   mkdir libreria-frontend
   cd libreria-frontend
   mkdir css js
   ```

2. **Copiar los archivos:**
   - Copiar `index.html` en la raíz
   - Copiar `styles.css` en `/css/`
   - Copiar `app.js` en `/js/`

3. **Abrir en VS Code:**
   ```bash
   code .
   ```

4. **Ejecutar con Live Server:**
   - Instalar extensión "Live Server" en VS Code
   - Click derecho en `index.html` → "Open with Live Server"
   - O simplemente abrir `index.html` en tu navegador

## 🔌 Conexión con API (Node.js + PostgreSQL)

El archivo `app.js` está preparado para conectarse a tu API. 
Solo necesitas descomentar las llamadas fetch en las funciones CRUD:

```javascript
// En app.js, línea 1:
const API_URL = 'http://localhost:3000/api';

// Ejemplo de endpoints esperados:
// GET    /api/libros        - Obtener todos los libros
// GET    /api/libros/:id    - Obtener un libro
// POST   /api/libros        - Crear libro
// PUT    /api/libros/:id    - Actualizar libro
// DELETE /api/libros/:id    - Eliminar libro

// Lo mismo para: /autores, /categorias, /editoriales
```

### Ejemplo de integración con API:

```javascript
// Reemplazar la función createItem con:
async function createItem(type, data) {
    try {
        const response = await fetch(`${API_URL}/${type}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const newItem = await response.json();
        datos[type].push(newItem);
        closeModal();
        renderAll();
        updateStats();
        showToast(`${getSingular(type)} creado exitosamente`, 'success');
    } catch (error) {
        showToast('Error al crear el registro', 'error');
    }
}
```

## 📊 Tablas de Base de Datos Esperadas

```sql
-- Autores
CREATE TABLE autores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    pais VARCHAR(100),
    fecha_nacimiento DATE,
    biografia TEXT
);

-- Categorías
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Editoriales
CREATE TABLE editoriales (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    pais VARCHAR(100),
    fundacion INTEGER,
    direccion VARCHAR(255)
);

-- Libros
CREATE TABLE libros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor_id INTEGER REFERENCES autores(id),
    categoria_id INTEGER REFERENCES categorias(id),
    editorial_id INTEGER REFERENCES editoriales(id),
    precio DECIMAL(10,2),
    stock INTEGER DEFAULT 0,
    isbn VARCHAR(20),
    año INTEGER
);
```

## 🎨 Personalización

### Cambiar colores principales:
Editar variables CSS en `styles.css`:

```css
:root {
    --cyan-500: #06b6d4;    /* Color principal */
    --blue-600: #2563eb;    /* Color secundario */
    --bg-primary: #0a0e1a;  /* Fondo principal */
}
```

## 📱 Responsive

El diseño se adapta automáticamente a:
- 💻 Desktop (> 1200px)
- 💻 Laptop (992px - 1200px)
- 📱 Tablet (768px - 991px)
- 📱 Mobile (< 768px)

## 🔧 Tecnologías

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid, Animaciones)
- JavaScript ES6+ (Vanilla)
- Google Fonts (Inter)

## 📝 Licencia

MIT License - Libre para uso personal y comercial.

---

Desarrollado con ❤️ para tu proyecto de librería