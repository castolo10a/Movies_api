const {Router} = require('express');
const { getCharacterHandlerById } = require('../handlers/charactersHandler')

const charactersRouter = Router();

charactersRouter.get('/:id', getCharacterHandlerById);

module.exports = { charactersRouter }