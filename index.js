var http = require('http')
,       fs = require('fs');

var server = http.createServer(function(req, res){
  var stream = fs.createReadStream('./index.html');
  stream.pipe(res);
});
server.listen(1337);

console.log("Server running at http://localhost:%d", port);
