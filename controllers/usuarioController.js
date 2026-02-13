const Usuario = require('../models/Usuario');

// CREAR
exports.crearUsuario = async (req, res) => {
    try {
        let usuario = new Usuario(req.body);
        await usuario.save();
        res.send(usuario);
    } catch (error) {
        res.status(400).send('Hubo un error al guardar');
    }
};

// OBTENER TODOS
exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).send('Error al obtener datos');
    }
};

// ACTUALIZAR
exports.actualizarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(usuario);
    } catch (error) {
        res.status(500).send('Error al actualizar');
    }
};

// ELIMINAR
exports.eliminarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).send('Error al eliminar');
    }
};