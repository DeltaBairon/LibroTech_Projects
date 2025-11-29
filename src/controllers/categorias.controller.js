import { pool } from "../db.js";

export const obtenerCategorias = async (req, res) => {
    const result = await pool.query("SELECT * FROM categorias");
    res.json(result.rows);
};

export const obtenerCategoria = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM categorias WHERE id = $1", [id]);
    if (result.rowCount === 0) return res.status(404).json({ msg: "Categoria no encontrada" });
    res.json(result.rows[0]);
};

export const crearCategoria = async (req, res) => {
    const { nombre, descripcion } = req.body;
    const result = await pool.query(
        "INSERT INTO categorias (nombre, descripcion) VALUES($1,$2) RETURNING *",
        [nombre, descripcion]
    );
    res.json(result.rows[0]);
};

export const actualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    const result = await pool.query(
        "UPDATE categorias SET nombre=$1, descripcion=$2 WHERE id=$3 RETURNING *",
        [nombre, descripcion, id]
    );
    res.json(result.rows[0]);
};

export const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM categorias WHERE id = $1", [id]);
    res.json({ msg: "Categoria eliminada" });
};
