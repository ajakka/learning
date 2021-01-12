const MongoClient = require('mongodb').MongoClient
const movies = require('./dao/moviesDao');
const assert = require('assert')

const dbUrl = 'mongodb+srv://ajakka:ajakka@mflix-learning.qgysd.mongodb.net/test?authSource=admin&replicaSet=atlas-bv5ul3-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'sample_mflix'

var dbClient
var moviesColl

MongoClient
    //Connects to mongodb
    .connect(dbUrl, { useUnifiedTopology: true })
    
    //Finds 64 documents with type 'movie' in movies collection
    .then((client) => {
        console.log('Connected successfully')
        dbClient = client
        moviesColl = client.db(dbName).collection('movies')
        return movies.findMovies(moviesColl, { type: 'movie' })
    })
    
    //Prints the 64 movies names and lookes for another name with 
    //title 'Blacksmith Scene'
    .then((docs) => {
        docs.forEach((doc, index) => {
            console.log(`Movie ${index}: ${doc.title}`)
        })
        return movies.findMovie(moviesColl, { title: 'Blacksmith Scene' })
    })
    
    //Prints that movie and closes connection
    .then((doc) => {
        console.log(`Movie : ${doc.title}`)
        dbClient.close(true)
    })
    
    //Fallback in case of error
    .catch((err) => {
        console.log(`Error: ${err.message}`)
        if (dbClient) dbClient.close(true)
    })
