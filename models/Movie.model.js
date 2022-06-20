const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema ({
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

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;