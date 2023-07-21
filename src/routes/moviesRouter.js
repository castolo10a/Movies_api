const {Router} = require('express');
const { getMoviesHandler, getMovieHandlerById } = require('../handlers/moviesHandler')

const moviesRouter = Router();

moviesRouter.get('/', getMoviesHandler);
moviesRouter.get('/:id', getMovieHandlerById);

module.exports = { moviesRouter }