const express = require('express');
const async = require('hbs/lib/async');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/movies', async (req, res, next) => {
    res.render('index')
});

module.exports = router;