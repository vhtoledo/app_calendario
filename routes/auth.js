/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

// Importaciones
const { Router } = require('express');
const router = Router();


// Ruta registrar user
router.post('/new', (req, res) => {

     res.json({
        ok:true,
        msg: 'Registro'
     });
});

// Ruta login user
router.post('/', (req, res) => {

    res.json({
       ok:true,
       msg: 'Login'
    });
});

// 
router.get('/renew', (req, res) => {

    res.json({
       ok:true,
       msg: 'renew'
    });
});



// Exportaiones
module.exports = router