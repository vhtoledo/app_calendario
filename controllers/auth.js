// Importaciones
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/User');
const { generarJWT } = require('../helpers/jwt');


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
      const token = await generarJWT( usuario.id, usuario.name);
   
      // Mostrar resultado 
       res.status(201).json({
          ok:true,
          uid: usuario.id,
          name: usuario.name,
          token
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
      const token = await generarJWT( usuario.id, usuario.name);

      res.json({
         ok: true,
         uid: usuario.id,
         name: usuario.name,
         token
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
const revalidarToken = async (req, res = response) => {

   const {uid, name} = req;

   // Generar un nuevo jwt y retonarlo en esta petición
   // Generar nuestro JWT
   const token = await generarJWT( uid, name);

    res.json({
       ok:true,
       token
    });
}



 module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
 }