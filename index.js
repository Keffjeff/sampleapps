const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
	fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }});
    response.end();
});

const port = process.env.PORT || 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
