const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('<html><body><p>"Created with the power of Siri and Bicep!<style>div {background-image: url('https://cswesteurope1003bffda3ce.blob.core.windows.net/images/lockscreen.jpg');}</style></p></body></html>');});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
