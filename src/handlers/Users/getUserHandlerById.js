const getUserHandlerById = (req, res) => {
    const {id} = req.params
    res.status(200).send(`detalle del usuario ${id}`)
};

module.exports = {
    getUserHandlerById
}