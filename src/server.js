import app from "./app.js";
import { testConnection } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

// Función para iniciar el servidor
const startServer = async () => {
    try {
        console.log('🚀 Iniciando servidor...');
        console.log('📡 Puerto:', PORT);
        console.log('🗄️  Base de datos:', process.env.DB_NAME);
        console.log('🌐 Host:', process.env.DB_HOST);
        
        // Probar conexión a la base de datos
        const connected = await testConnection();
        
        if (!connected) {
            console.error('\n❌ No se pudo conectar a la base de datos');
            console.error('⚠️  El servidor continuará, pero las peticiones fallarán\n');
        }
        
        // Iniciar servidor
        app.listen(PORT, () => {
            console.log(`\n✅ Servidor corriendo en http://localhost:${PORT}`);
            console.log('📝 Endpoints disponibles:');
            console.log(`   - GET/POST    http://localhost:${PORT}/libros`);
            console.log(`   - GET/POST    http://localhost:${PORT}/autores`);
            console.log(`   - GET/POST    http://localhost:${PORT}/categorias`);
            console.log(`   - GET/POST    http://localhost:${PORT}/editoriales`);
            console.log('\n🛑 Presiona CTRL+C para detener el servidor\n');
        });
        
    } catch (error) {
        console.error('❌ Error fatal al iniciar el servidor:', error);
        process.exit(1);
    }
};

startServer();