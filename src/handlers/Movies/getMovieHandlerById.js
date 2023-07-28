const getMovieHandlerById = (req, res) => {
    const {id} = req.params;
    res.status(200).send(`detalle de la pelicula ${id}`)
}

module.exports = {
    getMovieHandlerById
}