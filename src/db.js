import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

// Configuración para Azure PostgreSQL
export const pool = new pg.Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: {
        rejectUnauthorized: false // Azure PostgreSQL requiere SSL
    },
    connectionTimeoutMillis: 10000, // 10 segundos de timeout
    idleTimeoutMillis: 30000,
    max: 20 // Máximo de conexiones en el pool
});

// Test de conexión
pool.on('connect', () => {
    console.log('✅ Conectado a Azure PostgreSQL');
});

pool.on('error', (err) => {
    console.error('❌ Error en la conexión de PostgreSQL:', err);
});

// Función para verificar la conexión
export const testConnection = async () => {
    try {
        const client = await pool.connect();
        console.log('🔍 Probando conexión a la base de datos...');
        
        const result = await client.query('SELECT NOW()');
        console.log('✅ Conexión exitosa! Hora del servidor:', result.rows[0].now);
        
        client.release();
        return true;
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos:');
        console.error('   Mensaje:', error.message);
        console.error('   Código:', error.code);
        console.error('   Host:', process.env.DB_HOST);
        console.error('   Database:', process.env.DB_NAME);
        console.error('   User:', process.env.DB_USER);
        return false;
    }
};