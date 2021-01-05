const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url}`);
    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = './pages/index.html';
        else if (req.url == '/about') fileUrl = './pages/about.html';
        else {
            res.statusCode = 404;
            fileUrl = './pages/error.html'
        };

        var filePath = path.resolve(fileUrl);
        fs.stat(filePath, (err, stats) => {
            if (err) {
                res.statusCode = 404;
                fs.createReadStream('./pages/error.html').pipe(res);
            }
            else {
                fs.createReadStream(filePath).pipe(res);
            }
        })
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});