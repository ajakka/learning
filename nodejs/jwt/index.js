const mongoose = require('mongoose');
const env = require('dotenv');
const express = require('express');
const app = express();

// routers
const authRoute = require('./routes/auth');

// config
env.config();

// database
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to database')
});

// middleware
app.use(express.json());

// routes middleware
app.use('/api/user', authRoute);

app.listen(3000, () => { console.log('Server is up and running') });