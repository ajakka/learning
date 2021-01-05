const express = require('express');
const mongoose = require('mongoose');

const app = express();

const books = require('./routes/books');
const authors = require('./routes/authors');
const readers = require('./routes/readers');

let dbUrl = 'mongodb+srv://ajakka:ajakka@mflix-learning.qgysd.mongodb.net/sample_library'
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((database) => {
        console.log('Connected successfully');
    }).catch((err) => {
        console.error('Couldn\'t connect to database');
    })

app.use('/api/books', books);
app.use('/api/authors', authors);
app.use('/api/readers', readers);

app.use('/api', (req, res) => {
    res.send('API');
});

app.use('/', (req, res) => {
    res.send('HOME');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

// error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    res.status(err.status || 500);
    res.send('error')
})