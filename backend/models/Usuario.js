// 1. IMPORTAR MONGOOSE

const mongoose = require('mongoose');

// 2. SCHEMA DEL USUARIO 

const usuarioSchema = new mongoose.Schema({
    nombre:   {type: String, required: true},
    email:   {type: String, required: true, unique: true},
    password:   {type: String, required: true}
});

// 3. EXPORTAR EL MODEL 

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;