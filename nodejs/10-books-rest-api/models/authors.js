const mongoose = require('mongoose');

const books = new mongoose.Schema({
    bookId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    bookName: {
        type: String,
        required: true
    }
});

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    writenBooks: [{
        type: books,
        required: true
    }]
});

let Author = mongoose.model('Author', authorSchema);

module.exports = Author;