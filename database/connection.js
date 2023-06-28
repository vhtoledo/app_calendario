// Importar mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// Metodo de conexion
const dbConnection = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/app_calendar");

        console.log("Conectado correctamente a la bd: app_calendar")
    } catch (error) {
        console.log(error);
        throw new Error("No se ha establecido la conexión a la base de datos")
    }
}

// Exportar conexion
module.exports = {
    dbConnection
}