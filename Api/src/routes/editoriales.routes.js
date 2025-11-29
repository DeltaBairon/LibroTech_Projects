import { Router } from "express";
import {
    obtenerEditoriales,
    obtenerEditorial,
    crearEditorial,
    actualizarEditorial,
    eliminarEditorial
} from "../controllers/editoriales.controller.js";

const router = Router();

router.get("/", obtenerEditoriales);
router.get("/:id", obtenerEditorial);
router.post("/", crearEditorial);
router.put("/:id", actualizarEditorial);
router.delete("/:id", eliminarEditorial);

export default router;
