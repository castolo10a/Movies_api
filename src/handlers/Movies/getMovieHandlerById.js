const {getMovieById} = require('../../controllers/Movies/getMovieById');

const getMovieHandlerById = async (req, res) => {
    const {id} = req.params;
    try {
        const movieId = await getMovieById(id);
        res.status(200).json(movieId)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getMovieHandlerById
}