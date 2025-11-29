import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import autoresRoutes from "./routes/autores.routes.js";
import categoriasRoutes from "./routes/categorias.routes.js";
import editorialesRoutes from "./routes/editoriales.routes.js";
import librosRoutes from "./routes/libros.routes.js";

const app = express();

// Para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// SERVIR ARCHIVOS ESTÁTICOS DEL FRONTEND
app.use(express.static(path.join(__dirname, 'frontend')));

// Rutas API
app.use("/autores", autoresRoutes);
app.use("/categorias", categoriasRoutes);
app.use("/editoriales", editorialesRoutes);
app.use("/libros", librosRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

// Cualquier otra ruta sirve el frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

export default app;