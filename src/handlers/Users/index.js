const { getUserHandlerById } = require('./getUserHandlerById');
const { getUsersHandler } = require('./getUsersHandler')
const { loginUserHandler } = require('./loginUserHandler');
const { postUserHandler } = require('./postUserHandler');
const { updateUserHandler } = require('./updateUserHandler');

module.exports = {
    getUserHandlerById,
    getUsersHandler,
    loginUserHandler,
    postUserHandler,
    updateUserHandler
}