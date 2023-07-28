const {Router} = require('express');
const { getCharacterHandlerById } = require('../handlers/Characters/getCharacterHandlerById')

const charactersRouter = Router();

charactersRouter.get('/:id', getCharacterHandlerById);

module.exports = { charactersRouter }