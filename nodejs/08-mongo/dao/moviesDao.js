const assert = require('assert')


exports.insertMovie = (document) => {

}

exports.findMovie = (movies, criteria) => {
    return movies.findOne(criteria)
}

exports.findMovies = (movies, criteria) => {
    return movies.find(criteria)
        .limit(64)
        .toArray()
}

exports.updateMovie = (document, update, callback) => {
}

exports.deleteMovie = (criteria, callback) => {

}