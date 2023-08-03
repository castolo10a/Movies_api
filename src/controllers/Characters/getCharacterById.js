const axios = require('axios');
const { API_KEY } = require('../../db');

const getCharacterById = async (id) => {
    const character = (await axios.get(`https://comicvine.gamespot.com/api/character/4005-${Number(id)}/?api_key=${API_KEY}&format=json`)).data.results;
    if (!character) throw new Error(`Character with ID: ${id} not found`);
    
    return {
        id: character.id,
        image: character.image?.original_url || '',
        aliases: character.aliases.split('\n'),
        name: character.name || '',
        real_name: character.real_name || '',
        description: character.deck || character.description,
        birth: character.birth || '',
        movies: character.movies?.map(movie => ({id: movie.id, name: movie.name})) || []
    }
};

module.exports = {
    getCharacterById
}