// Importaciones
const { response } = require('express');
const Usuario = require('../models/User');


// Metodo crear Usuario
const crearUsuario = async (req, res = response) => {

   const { email, password } = req.body;

   try {

      let usuario = await Usuario.findOne({ email });

      if ( usuario ) {
         return res.status(400).json({
            ok: false,
            msg: 'Un usuario existe con correo'
         });
      }

      usuario = new Usuario( req.body );
   
      await usuario.save();
   
   
       res.status(201).json({
          ok:true,
          uid: usuario.id,
          name: usuario.name
       });
      
   } catch (error) {
      console.log(error)
      res.status(500).json({
         ok: false,
         msg: 'Por favor hable con el administrador'
      })
   }

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