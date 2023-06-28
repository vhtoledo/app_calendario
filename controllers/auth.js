// Importaciones
const { response } = require('express');
const bcrypt = require('bcryptjs');
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

      // Encriptar contraseña
      const salt = bcrypt.genSaltSync();
      usuario.password = bcrypt.hashSync( password, salt );

      // Guardar usuario en db
      await usuario.save();

      // Generar JWT
      
   
      // Mostrar resultado 
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
 const loginUsuario = async (req, res = response) => {

   const { email, password } = req.body;

   try {

      let usuario = await Usuario.findOne({ email });

      if ( !usuario ) {
         return res.status(400).json({
            ok: false,
            msg: 'El usuario no existe con este email'
         });
      }

      // Confirmar los passwords
      const validPassword = bcrypt.compareSync( password, usuario.password )

      if ( !validPassword ) {
         return res.status(400).json({
            ok: false,
            msg: 'Password incorrecto'
         });
      }

      // Generar nuestro JWT

      res.json({
         ok: true,
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