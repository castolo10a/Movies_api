const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { moviesRouter } = require('./moviesRouter');
const { usersRouter } = require('./usersRouter');
const { charactersRouter } = require('./charactersRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('/characters', charactersRouter);

module.exports = router;
