// Importaciones
const { response } = require('express');



// Metodo crear Usuario
const crearUsuario = (req, res = response) => {

    res.json({
       ok:true,
       msg: 'Registro'
    });
}

// Metodo login usuario
 const loginUsuario = (req, res = response) => {

    res.json({
       ok:true,
       msg: 'Login'
    });
}

// Metodo revalidar token
const revalidarToken = (req, res = response) => {

    res.json({
       ok:true,
       msg: 'renew'
    });
}



 module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
 }