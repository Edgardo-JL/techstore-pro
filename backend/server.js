// 1. IMPORTAR LAS DEPENDENCIAS 

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Producto = require('./models/Producto');
const authRoutes   = require('./routes/auth');
const verificarToken = require('./middleware/auth')

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
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

// 6. RUTA POST / API / PRODUCTOS - CREAR UN PRODUCTO NUEVO 

app.post('/api/productos', verificarToken, async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body);
        res.status(201).json(nuevoProducto);
    } catch (err){
            res.status(400).json({ error: err.message });
    }
});

// 7. RUTA PUT / API / PRODUCTOS / :ID - ACTUALIAR PRODUCTO

app.put('/api/productos/:id', verificarToken, async (req,res) => {
    try {
        const actualizado = await Producto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        if (!actualizado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(actualizado);
        } catch (err) {
            res.status(400).json({ error: err.message});
        }
});

// 8. RUTA DELETE / API / PRODUCTOS :ID - ELIMINAR UN PRODDUCTO

app.delete('/api/productos/:id', verificarToken, async (req,res) => {
    try {
        const eliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ error: 'Producto no encontrado'});
        res.json({ mensaje: 'Producto eliminado correctamente', eliminado });
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
});

// 9. RUTA DE PRUEBA 

app.get('/', (req, res) => {
    req.json({mensaje: 'Servidor TechStore Pro ✅'});
});

// 10. ARRANCAR EL SERVIDOR 

app.listen(PORT, () => {
    console.log('Servidor en http://localhost:${PORT}');
});

// 11. RUTAS DE AUTENTICACIÓN

app.use('/api/auth', authRoutes);

