const Producto = require('../models/Producto');

exports.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.json(nuevoProducto);
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
};