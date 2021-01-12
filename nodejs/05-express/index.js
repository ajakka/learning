const express = require('express');
const http = require('http');

// Express initialization
const app = express();
app.use(express.static(__dirname + '/public'));

// Server hostname and port
const hostname = 'localhost';
const port = 3000;

// Server creation
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});