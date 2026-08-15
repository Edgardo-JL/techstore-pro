// 1. IMPORTAR LAS DEPENDENCIAS 

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Producto = require('./models/Producto');

// 2. CREAR LA APICACION Y DEFINIR EL PUERTO 

const app = express();
const PORT = process.env.PORT || 3000;

// 3. ACTIVAR MIDDLEWARES

app.use(cors());
app.use(express.json());

// 4. CONECTAR A MONGODB ATLAS

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch((err) => console.error('❌ Error de conexión'));

// 5. RUTA GET /API/PRODUCTOS - AHORA LEE DE MONGODB ATLAS

app.get('/api/productos', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    }   catch (err) {
        res.status(500).json({ error: 'Error al obtener productos' })
    }
});

// 6. RUTA DE PRUEBA 

app.get('/', (req, res) => {
    req.json({mensaje: 'Servidor TechStore Pro ✅'});
});

// 7. ARRANCAR EL SERVIDOR 

app.listen(PORT, () => {
    console.log('Servidor en http://localhost:${PORT}');
});


