const {Router} = require('express');

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    res.status(200).send('estoy en usuarios');
});

usersRouter.post('/', (req, res) => {
    res.status(201).send('creando un usuario');
});

usersRouter.post('/login', (req, res) => {
    res.status(201).send('login');
});

usersRouter.put('/', (req, res) => {
    res.status(200).send('actualizando datos de un usuario');
});

module.exports = { usersRouter }