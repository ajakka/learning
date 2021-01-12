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

const readerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    readBooks: [books]
});

let Reader = mongoose.model('Reader', readerSchema);

module.exports = Reader;