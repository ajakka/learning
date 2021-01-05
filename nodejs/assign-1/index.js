const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();

// router declaration
const disheRouter = require('./routers/dishesRouter');
const leaderRouter = require('./routers/leadersRouter');
const promoRouter = require('./routers/promosRouter');

// middleware
app.use(auth);
app.use(express.json());
app.use(cookieParser('59748-52001-65813-9561'));

// router usage
app.use('/dishes', disheRouter);
app.use('/leaders', leaderRouter);
app.use('/promos', promoRouter);

// database connection
const url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url)
    .then((db) => {
        console.log("Connected correctly to server");
    }, (err) => { console.log(err); });


var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// authentication function
function auth(req, res, next) {
    // just looging to see result, should be removed
    console.log(req.headers);
    console.log(req.signedCookies);

    // if the user cookie is null, it means the user isn't authenticated
    // therefore will be redirected to authenticate
    if (!req.signedCookies.user) {

        // we expect the user to send authorization info
        // if not then we send error and exit
        var authHeader = req.headers.authorization;
        if (!authHeader) {
            var err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            next(err);
            return;
        }

        // if authorization info is suplied, it's then decoded and extracted
        // authHeader raw message goes: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
        // decoded base64 string goes: username:password
        var auth = new Buffer
            .from(authHeader.split(' ')[1], 'base64')
            .toString()
            .split(':');
        var user = auth[0];
        var pass = auth[1];

        // that's where we check if credentials are correct,
        // ps: that's just a placeholder
        if (user == 'admin' && pass == 'password') {
            res.cookie('user', 'admin', { signed: true })
            next(); // authorized
        } else {
            // wrong credentials
            var err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            next(err);
        }
    }
    // this means the user supplied a cookie with the request
    else {
        if (req.signedCookies.user === 'admin') {
            next();
        }
        else {
            var err = new Error('You are not authenticated!');
            err.status = 401;
            next(err);
        }
    }

}