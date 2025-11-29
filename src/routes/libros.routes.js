import { Router } from "express";
import {
    obtenerLibros,
    obtenerLibro,
    crearLibro,
    actualizarLibro,
    eliminarLibro
} from "../controllers/libros.controller.js";

const router = Router();

router.get("/", obtenerLibros);
router.get("/:id", obtenerLibro);
router.post("/", crearLibro);
router.put("/:id", actualizarLibro);
router.delete("/:id", eliminarLibro);

export default router;