const getMoviesHandler = (req, res) => {
    const {name} = req.query;
    name ? res.status(200).json(`busca las peliculas con el nombre ${name}`)
         : res.status(200).json('estoy en todas las peliculas')
};

module.exports = {
    getMoviesHandler
}