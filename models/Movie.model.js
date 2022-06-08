const mongoose = require('mongoose');
const { Squema } = mongoose;

const movieSchema = newSchema ({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String
    },
    stars: {
        type: [String]
    },
    image: {
        type: String,
        default: "https://anrp.tamu.edu/wp-content/uploads/sites/29/2014/12/Image-Not-Available-819x1024.jpg"
    },
    description: {
        type: String
    },
    showtimes: {
        type: [String]
    }
})

module.exports = Movie.model;