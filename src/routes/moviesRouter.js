const {Router} = require('express');
const { getMoviesHandler, getMovieHandlerById } = require('../handlers/Movies/index')

const moviesRouter = Router();

moviesRouter.get('/', getMoviesHandler);
moviesRouter.get('/:id', getMovieHandlerById);

module.exports = { moviesRouter }