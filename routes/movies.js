const express = require('express');
const async = require('hbs/lib/async');
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

module.exports = router;