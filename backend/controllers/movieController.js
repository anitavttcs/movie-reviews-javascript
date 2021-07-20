const fetch = require('node-fetch');

const getMovies = async (req, res) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`);
    const jsonResponse = await response.json();
    res.send(jsonResponse);
};

const getMovie = async (req, res) => {

};

module.exports = { getMovies, getMovie };