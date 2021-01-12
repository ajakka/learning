const express = require('express');
const app = express();

const grades = require('./routes/grades');
const students = require('./routes/students');

// parses request body and puts the result inside req.body
//app.use(express.json());

app.use('/api/grades', grades);
app.use('/api/students', students);

app.use('/api', (req, res) => {
    res.send('Welcome to school RESTful API');
});

app.use('/', (req, res) => {
    res.send('Welcome to school Homepage');
});

var port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});