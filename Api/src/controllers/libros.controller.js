import { pool } from "../db.js";

export const obtenerLibros = async (req, res) => {
    const result = await pool.query("SELECT * FROM Libros");
    res.json(result.rows);
};

export const obtenerLibro = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM Libros WHERE id = $1", [id]);
    if (result.rowCount === 0) return res.status(404).json({ msg: "Libro no encontrado" });
    res.json(result.rows[0]);
};

export const crearLibro = async (req, res) => {
    try {
        const { titulo, autor_id, categoria_id, editorial_id, precio, stock, isbn, año } = req.body;

        const result = await pool.query(
            `INSERT INTO libros 
            (titulo, autor_id, categoria_id, editorial_id, precio, stock, isbn, año)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
            RETURNING *`,
            [titulo, autor_id, categoria_id, editorial_id, precio, stock, isbn, año]
        );

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creando el libro" });
    }
};


export const actualizarLibro = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, autor_id, categoria_id, editorial_id, precio, stock, isbn, año } = req.body;

        const result = await pool.query(
            `UPDATE libros 
            SET titulo=$1, autor_id=$2, categoria_id=$3, editorial_id=$4, 
                precio=$5, stock=$6, isbn=$7, año=$8
            WHERE id=$9 
            RETURNING *`,
            [titulo, autor_id, categoria_id, editorial_id, precio, stock, isbn, año, id]
        );

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error actualizando el libro" });
    }
};


export const eliminarLibro = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM Libros WHERE id = $1", [id]);
    res.json({ msg: "Libro eliminado" });
};
