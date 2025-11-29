import { pool } from "../db.js";

export const obtenerAutores = async (req, res) => {
    const result = await pool.query("SELECT * FROM autores");
    res.json(result.rows);
};

export const obtenerAutor = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM autores WHERE id = $1", [id]);
    if (result.rowCount === 0) return res.status(404).json({ msg: "Autor no encontrado" });
    res.json(result.rows[0]);
};

export const crearAutor = async (req, res) => {
    const { nombre, pais, fecha_nacimiento, biografia } = req.body;
    const result = await pool.query(
        "INSERT INTO autores(nombre, pais, fecha_nacimiento, biografia) VALUES($1,$2,$3,$4) RETURNING *",
        [nombre, pais, fecha_nacimiento, biografia]
    );
    res.json(result.rows[0]);
};

export const actualizarAutor = async (req, res) => {
    const { id } = req.params;
    const { nombre, pais, fecha_nacimiento, biografia } = req.body;
    const result = await pool.query(
        "UPDATE autores SET nombre=$1, pais=$2, fecha_nacimiento=$3, biografia=$4 WHERE id=$5 RETURNING *",
        [nombre, pais, fecha_nacimiento, biografia, id]
    );
    res.json(result.rows[0]);
};

export const eliminarAutor = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM autores WHERE id = $1", [id]);
    res.json({ msg: "Autor eliminado" });
};
