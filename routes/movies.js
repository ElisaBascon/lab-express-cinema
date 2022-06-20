const express = require('express');

const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/movies', async (req, res, next) => {
    try { 
        const movies = await Movie.find({});
        res.render('movies', { movies }) 
    } catch (error) {
        next(error) 
    }
});

router.get('/movies/:movieId', (req, res, next) => {
    const {movieId} = req.params;
    Movie.findById(movieId)
        .then( movie => {
            res.render('./movie', {movie: movie})
        })
        .catch(err => {
            console.log(`Error retrieving movie details --> ${err}`, )
            next(err)
        })
});

module.exports = router;