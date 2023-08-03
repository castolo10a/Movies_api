const axios = require('axios');
const { API_KEY } = require('../../db');

const getMovieById = async (id) => {
  const data = (await axios.get(`https://comicvine.gamespot.com/api/movie/4025-${Number(id)}/?api_key=${API_KEY}&format=json`)).data.results;
  if (!data) throw new Error(`Movie with ID: ${id} not found`);

  return {
    id: data.id,
    image: data.image?.original_url || '',
    name: data.name,
    date_added: data.date_added.split('-')[0],
    description: data.deck || data.description,
    studios: data.studios?.map(studio => studio.name) || [],
    producers: data.producers?.map(producer => producer.name) || [],
    characters: data.characters?.map(character => ({ id: character.id, name: character.name })) || [],
    concepts: data.concepts?.map(concept => concept.name) || [],
    isFav: false,
  };
};

module.exports = {
  getMovieById
};
