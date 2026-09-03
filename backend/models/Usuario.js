// 1. IMPORTAR MONGOOSE

const mongoose = require('mongoose');

// 2. SCHEMA DEL USUARIO 

const usuarioSchema = new mongoose.Schema({
    nombre:       {type: String, required: true},
    email:        {type: String, required: true, unique: true},
    password:     {type: String, required: true},
    departamento: {type: String, required: true},
    municipio:    {type: String, required: true},
    rol:          {type: String, 
                enum: ['admin', 'cliente'],
                default: 'cliente'}
});

// 3. EXPORTAR EL MODEL 

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;