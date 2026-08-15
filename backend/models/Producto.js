// Importar Mongoose para usar schema y model

const mongoose = require('mongoose');

//Schema: define los campos de cada documento en Atlas

const productoSchema = new mongoose.Schema({
    id:          {type: Number, required: true},
    icono:       {type: String, required: true},
    nombre:      {type: String, required: true},
    descripcion: {type: String, required: true},
    precio:      {type: String, required: true},
    imagen:      {type: String, required: true}
});

// Crear el Model - Mongoose busca la coleccion 'productos' en Atlas 

const Producto = mongoose.model('Producto',productoSchema);

// Exportar para poder usarlo en el server.js

module.exports = Producto;