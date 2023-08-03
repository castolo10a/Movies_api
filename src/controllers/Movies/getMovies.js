const axios = require('axios');
const { API_KEY } = require('../../db');

const getAllMovies = async () => {
    let currentPage = 1;
    const movies = [];
  
    while (currentPage < 4) {
      const offset = movies.length > 0 ? movies[movies.length - 1].id : 0;
      const response = await axios.get(`https://comicvine.gamespot.com/api/movies/?api_key=${API_KEY}&format=json&offset=${offset}`);
      const data = response.data.results;
      
      movies.push(
        ...data.map(movie => ({
          id: movie.id,
          image: movie.image?.original_url || '',
          name: movie.name,
        }))
      );
  
      currentPage++;
    }
  
    return movies;
};

const getMoviesByName = async (name) => {
    
    if(name.length < 4) throw new Error('Must be at least 4 characters long');

    const movies = await getAllMovies();
    console.log(movies);
    return movies.filter(movie => movie.name.toLowerCase().includes(name.toLowerCase()))

}

module.exports = {
  getAllMovies,
  getMoviesByName
};