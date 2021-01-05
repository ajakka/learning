const express = require('express');
const http = require('http');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const dishRouter = require('./dishRouter');
const app = express();

// middleware
app.use(auth);
app.use(morgan('dev'));
app.use(cookieParser('59748-52001-65813-9561'));

// router
app.use('/dishes', dishRouter);

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('OMIDITO!! You made it.');
});

app.use(error);

// server start
const hostname = 'localhost';
const port = 3000;

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// error function
function error(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.message);
}

// authentication, cookies and session function
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