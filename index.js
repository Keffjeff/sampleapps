var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('/home/site/wwwroot/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);