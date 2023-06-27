/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

// Importaciones
const { Router } = require('express');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');


// Ruta registrar user
router.post('/new', crearUsuario );

// Ruta login user
router.post('/', loginUsuario );

// Ruta revalidar user
router.get('/renew', revalidarToken );



// Exportaiones
module.exports = router