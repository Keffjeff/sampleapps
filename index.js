const http = require('http');
const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile('test.html');});

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
