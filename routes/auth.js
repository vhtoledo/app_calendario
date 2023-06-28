/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

// Importaciones
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();



// Ruta registrar user
router.post('/new', 
    // middlewares
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ], 
    crearUsuario );

// Ruta login user
router.post('/',
    // middlewares
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario );

// Ruta revalidar user
router.get('/renew', revalidarToken );



// Exportaiones
module.exports = router