const {Router} = require('express');

const moviesRouter = Router();

moviesRouter.get('/', (req, res) => {
    res.status(200).send('estoy en movies')
})

module.exports = { moviesRouter }