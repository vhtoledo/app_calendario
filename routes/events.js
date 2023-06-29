/* 
    Event Routes
    /api/events
*/
// Importaciones
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

// Todas tienen que psar por la validación del JWT
// Obtener eventos
Router.get('/', validarJWT, getEventos);

// Crear un nuevo evento
Router.post('/', validarJWT, crearEvento);

// Actualizar Evento
Router.put('/:id', validarJWT, actualizarEvento);

// Borrar Evento
Router.delete('/:id', validarJWT, eliminarEvento);
