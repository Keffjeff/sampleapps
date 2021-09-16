const http = require('http');
const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile('test.html');
});

const server = http.createServer((request, response) => {
    response.end()

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
