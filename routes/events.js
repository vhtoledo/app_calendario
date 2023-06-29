
// Todas tienen que psar por la validación
// Obtener eventos
Router.get('/', getEventos);

// Crear un nuevo evento
Router.post('/', crearEvento);

// Actualizar Evento
Router.put('/:id', actualizarEvento);

// Borrar Evento
Router.delete('/:id', eliminarEvento);
