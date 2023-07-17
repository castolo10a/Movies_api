const {Router} = require('express');

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    res.status(200).send('estoy en usuarios')
})

module.exports = usersRouter