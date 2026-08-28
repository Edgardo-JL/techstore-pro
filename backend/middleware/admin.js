// Middleware: verifica que el usuario autenticado tenga el rol admin

function verificarAdmin(req, res, netx) {
    if (!req.usuario) {
        return res.status(401).json({ error: 'sin autenticación' });
    }
    if (req.usuario.rol !== 'admin') {
        return res.status(403).json({ error: 'Acceso dennegado - se requiere el rol admin' });
    }
    netx(); // solo llega aqui si el token existe y el rol es admin
}

module.exports = verificarAdmin;