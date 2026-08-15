// IMPORTAR LAS DEPENDENCIAS 

const express = require('express');
const cors = require('cors');

// CREAR LA APICACION Y DEFINIR EL PUERTO 

const app = express();
const PORT = 3000;

// ACTIVAR MIDDLEWARES

app.use(cors());
app.use(express.json());

// RUTA GET / API / PRODUCTOS

app.get('/api/productos', (req, res) => {
    const productos = require('../frontend/data/productos.json');
    res.json(productos);
});

// RUTA DE PRUEBA 

app.get('/', (req, res) => {
    req.json({mensaje: 'Servidor TechStore Pro ✅'});
});

// ARRANCAR EL SERVIDOR 

app.listen(PORT, () => {
    console.log('Servidor en http://localhost:${PORT}');
});


