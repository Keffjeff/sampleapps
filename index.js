const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('<html><head><style> body {background-image: url('https://cswesteurope1003bffda3ce.blob.core.windows.net/images/lockscreen.jpg');}</style></head><body><p><b><font size="400" color="blue">Created with the power of Siri and Bicep!</font></b></p></body></html>')

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
