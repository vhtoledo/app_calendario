// Importaciones
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/connection');

// Crear servidor de express
const app = express();

// Base de detos
dbConnection();

// CORS
app.use(cors())

// Directorio Publico
app.use( express.static('public'));

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'));

// Escuchar peticiones 
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});