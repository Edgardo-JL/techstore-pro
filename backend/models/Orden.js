const mongoose = require('mongoose');
const { Schema} = mongoose;

const ordenSchema = new Schema({

    //¿Quien hizo la orden _ referencias al _id del usuario

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    // Arreglo de productos con cantidad
    productos: [{
        producto: {
            type: Schema.Types.ObjectId,
            ref: 'Producto'
        },
        cantidad: { type: Number, required: true, min: 1}
    }],

    // Total calculado en el fronted (o en una ruta)
    total: { type: Number, required: true},

    // Estado del ciclo de vida de la orden 
    estado: {
        type: String,
        default: 'pendiente',
        enum: ['pendiente', 'procesando', 'enviado', 'entregado']
    }

}, { timestamps: true});

const Orden = mongoose.model('Orden', ordenSchema);
module.exports = Orden;


