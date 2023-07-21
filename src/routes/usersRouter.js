const {Router} = require('express');
const {getUsersHandler, getUserHandlerById, postUserHandler, loginUserHandler, updateUserHandler} = require('../handlers/usersHandler')

const usersRouter = Router();

usersRouter.get('/', getUsersHandler);
usersRouter.get('/:id', getUserHandlerById);
usersRouter.post('/', postUserHandler);
usersRouter.post('/login', loginUserHandler);
usersRouter.put('/', updateUserHandler);

module.exports = { usersRouter }