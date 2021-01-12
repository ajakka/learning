const mongoose = require('mongoose');

const ISBNSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    idenetifier: {
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
    description: { type: String },
    cover: { type: String },
    releaseDate: { type: Date, default: Date.now() },
    price: { type: Number, required: true },
    link: { type: String },
    isbn: { type: ISBNSchema, required: true }
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;