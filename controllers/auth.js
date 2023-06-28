// Importaciones
const { response } = require('express');


// Metodo crear Usuario
const crearUsuario = (req, res = response) => {

   const { name, email, password } = req.body;

    res.status(201).json({
       ok:true,
       msg: 'Registro',
       name,
       email,
       password
    });
}

// Metodo login usuario
 const loginUsuario = (req, res = response) => {

   const { email, password } = req.body;

   res.status(201).json({
       ok:true,
       msg: 'Login',
       email,
       password
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