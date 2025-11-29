import { pool } from "../db.js";

export const obtenerEditoriales = async (req, res) => {
    const result = await pool.query("SELECT * FROM editoriales");
    res.json(result.rows);
};

export const obtenerEditorial = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM editoriales WHERE id = $1", [id]);
    if (result.rowCount === 0) return res.status(404).json({ msg: "Editorial no encontrada" });
    res.json(result.rows[0]);
};

export const crearEditorial = async (req, res) => {
    const { nombre, pais, fundacion,  direccion } = req.body;
    const result = await pool.query(
        "INSERT INTO editoriales (nombre, pais, fundacion, direccion) VALUES($1,$2,$3,$4) RETURNING *",
        [nombre,  pais, fundacion,  direccion]
    );
    res.json(result.rows[0]);
};

export const actualizarEditorial = async (req, res) => {
    const { id } = req.params;
    const {nombre,  pais, fundacion,  direccion } = req.body;
    const result = await pool.query(
        "UPDATE editoriales SET nombre=$1, pais=$2, fundacion=$3, direccion=$4 WHERE id=$5 RETURNING *",
        [nombre,  pais, fundacion,  direccion, id]
    );
    res.json(result.rows[0]);
};

export const eliminarEditorial = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM editoriales WHERE id = $1", [id]);
    res.json({ msg: "Editorial eliminada" });
};
