const fetch = require('node-fetch');

const getMovies = async (req, res) => {
    const page = req.params.number || 1;
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=${process.env.API_KEY}`);
    const jsonResponse = await response.json();
    res.send(jsonResponse);
};

const getMovie = async (req, res) => {
    // TODO: van-e review, ha van visszaküldeni
    const response = await fetch(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}`);
    const jsonResponse = await response.json();
    res.send(jsonResponse);
};

const searchMovie = async (req, res) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${req.query.name}`);
    const jsonResponse = await response.json();
    res.send(jsonResponse);
};


module.exports = { getMovies, getMovie, searchMovie };