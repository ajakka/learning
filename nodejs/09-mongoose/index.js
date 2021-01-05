const mongoose = require('mongoose');
const Books = require('./models/books');

var url = 'mongodb+srv://ajakka:ajakka@mflix-learning.qgysd.mongodb.net/sample_library'

mongoose.connect(url, { useNewUrlParser: true })
    .then((db) => {
        console.log('Nicelly connected');

        Books.create({
            name: 'Beginning Node.js, Express & MongoDB Development',
            authors: ['Lim Greg'],
            description: "In this book, we take you on a fun, hands-on and pragmatic journey to learning Node.js, Express and MongoDB development. You'll start building your first Node.js app within minutes.",
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562078363l/51243676._SX318_SY475_.jpg",
            releaseDate: '2019-07-01T00:00:00.000+00:00',
            price: 17.99,
            link: "https://www.amazon.com/gp/product/1078379556/",
            isbn: {
                type: 'ISBN13',
                idenetifier: '9781078379557'
            }
        }).then((book) => {
            console.log(`Saved book: ${book}`);
        }).catch((err) => {
            console.error(err.message, err);
        }).finally(() => { mongoose.connection.close(); })

    });

/**
const movieSchema = new mongoose.Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    rated: String,
    cast: [String],
    num_mflix_comments: Number,
    poster: String,
    title: String,
    fullplot: String,
    languages: [String],
    released: { type: Date, default: Date.now() },
    directors: [String],
    writers: [String],
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    lastupdated: Date,
    year: Number,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
    },
    countries: [String],
    type: String,
    tomatoes: {
        viewer: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        dvd: { type: Date, default: Date.now() },
        critic: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        lastUpdated: { type: Date, default: Date.now() },
        rotten: Number,
        production: String,
        fresh: Number
    }
})
 */