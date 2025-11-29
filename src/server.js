import app from "./app.js";
import { testConnection } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

// ⭐ Azure usa process.env.PORT
const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0'; // ⭐ IMPORTANTE para Azure

// Función para iniciar el servidor
const startServer = async () => {
    try {
        console.log('🚀 Iniciando servidor LibroTech...');
        console.log('📡 Puerto:', PORT);
        console.log('🌍 Host:', HOST);
        console.log('🗄️  Base de datos:', process.env.DB_NAME);
        console.log('🌐 DB Host:', process.env.DB_HOST);
        
        // Probar conexión a la base de datos
        const connected = await testConnection();
        
        if (!connected) {
            console.error('\n⚠️  ADVERTENCIA: No se pudo conectar a la base de datos');
            console.error('   El servidor continuará pero las peticiones pueden fallar\n');
        } else {
            console.log('✅ Base de datos conectada correctamente');
        }
        
        // ⭐ Iniciar servidor con HOST '0.0.0.0' para Azure
        app.listen(PORT, HOST, () => {
            console.log(`\n✅ Servidor LibroTech corriendo en puerto ${PORT}`);
            console.log(`🌐 URL: http://${HOST}:${PORT}`);
            console.log('\n📝 Endpoints disponibles:');
            console.log(`   - GET  /                  → Info de la API`);
            console.log(`   - GET  /health            → Health check`);
            console.log(`   - CRUD /libros            → Gestión de libros`);
            console.log(`   - CRUD /autores           → Gestión de autores`);
            console.log(`   - CRUD /categorias        → Gestión de categorías`);
            console.log(`   - CRUD /editoriales       → Gestión de editoriales`);
            console.log('\n🛑 Presiona CTRL+C para detener el servidor\n');
        });
        
    } catch (error) {
        console.error('❌ Error fatal al iniciar el servidor:', error);
        process.exit(1);
    }
};

// Manejo de errores no capturados
process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection:', reason);
});

process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught Exception:', error);
    process.exit(1);
});

startServer();