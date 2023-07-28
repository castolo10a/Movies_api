const getCharacterHandlerById = (req, res) => {
    const {id} = req.params;
    res.status(200).send(`detalle del character ${id}`)
}

module.exports = {
    getCharacterHandlerById
}