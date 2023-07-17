const {Router} = require('express');

const charactersRouter = Router();

charactersRouter.get('/', (req, res) => {
    res.status(200).send('estoy en characters')
})

module.exports = charactersRouter