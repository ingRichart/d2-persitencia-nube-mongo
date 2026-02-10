// const express = require('express');
// const conectarDB = require('./config/db'); // El archivo que creamos antes
// require('dotenv').config();

// const app = express();

// // 1. Intentar conectar a la base de datos
// conectarDB();

// app.get('/', (req, res) => res.send('API Funcionando'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));



require('dotenv').config(); // 1. Cargar variables de entorno primero
const express = require('express');
const conectarDB = require('./config/db'); // Tu archivo de conexión
const cors = require('cors');

const app = express();

// 2. Conectar a la Base de Datos
conectarDB();

// 3. Middlewares
app.use(cors());
app.use(express.json()); // Para poder leer JSON en el body de las peticiones

// 4. Rutas de la Aplicación
// Aquí irán las rutas que tus alumnos desarrollen
app.use('/api/usuarios', require('./routes/usuarios')); // Registro e Login
app.use('/api/auth', require('./routes/auth'));         // JWT Auth
app.use('/api/productos', require('./routes/productos')); // CRUD de Productos

// Ruta de prueba para verificar que el despliegue fue exitoso
app.get('/', (req, res) => {
    res.send('Servidor funcionando en Vercel 🚀');
});

// 5. Configuración del Puerto
// Vercel asigna el puerto automáticamente, por eso usamos process.env.PORT
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});

// 6. IMPORTANTE PARA VERCEL:
// Aunque app.listen funciona localmente, Vercel necesita exportar el módulo
module.exports = app;