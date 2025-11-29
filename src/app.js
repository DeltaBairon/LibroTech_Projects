import express from "express";
import cors from "cors";

import autoresRoutes from "./routes/autores.routes.js";
import categoriasRoutes from "./routes/categorias.routes.js";
import editorialesRoutes from "./routes/editoriales.routes.js";
import librosRoutes from "./routes/libros.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// rutas
app.use("/autores", autoresRoutes);
app.use("/categorias", categoriasRoutes);
app.use("/editoriales", editorialesRoutes);
app.use("/libros", librosRoutes);

export default app;
