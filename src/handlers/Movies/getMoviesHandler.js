const {getAllMovies, getMoviesByName} = require('../../controllers/Movies/getMovies');

const getMoviesHandler = async (req, res) => {
    const {name} = req.query;
    try {
        const results =  name ? await getMoviesByName(name) : await getAllMovies()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error: error. message})
    }
};

module.exports = {
    getMoviesHandler
}