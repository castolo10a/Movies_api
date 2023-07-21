const getMoviesHandler = (req, res) => {
    const {name} = req.query;
    name ? res.status(200).json(`busca las peliculas con el nombre ${name}`)
         : res.status(200).json('estoy en todas las peliculas')
};

const getMovieHandlerById = (req, res) => {
    const {id} = req.params;
    res.status(200).send(`detalle de la pelicula ${id}`)
}

module.exports = { 
    getMoviesHandler,
    getMovieHandlerById
};