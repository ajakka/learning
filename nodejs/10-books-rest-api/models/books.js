const mongoose = require('mongoose');

const isbnSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    idenetifier: {
        type: String,
        required: true,
        unique: true
    }
});

const ratingSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String
    },
    commenter: {
        type: String,
        required: true
    },
    commenterId: {
        // type: mongoose.Types.ObjectId,
        type: String,
        required: true
    }
});

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    authors: {
        type: [String],
        required: true,
        min: 1
    },
    description: {
        type: String
    },
    cover: {
        type: String
    },
    releaseDate: {
        type: Date,
        default: Date.now()
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    link: {
        type: String
    },
    isbn: {
        type: isbnSchema,
        required: true,
        unique: true
    },
    rating: {
        type: [ratingSchema]
    }
});

let Book = mongoose.model('Book', bookSchema);

module.exports = Book;