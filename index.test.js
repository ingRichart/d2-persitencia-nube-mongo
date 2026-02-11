const request = require('supertest');
const app = require('./index'); // Importamos tu app
const mongoose = require('mongoose');

describe('Pruebas de la ruta principal', () => {
    
    // Cerramos la conexión de base de datos después de los tests para que Jest no se quede colgado
    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('Debería retornar un mensaje de éxito en la raíz', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Servidor funcionando en Vercel 🚀');
    });
});