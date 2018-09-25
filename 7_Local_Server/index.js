let http = require('http');

let server = http.createServer(function (req, res) {
  console.log('URL: ' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
  res.end('Hello world');
});

server.listen(3000, '127.0.0.1');
console.log('port 3000');
