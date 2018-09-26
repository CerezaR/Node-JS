let fs = require('fs');

let http = require('http');

let server = http.createServer(function (req, res) {
  console.log('URL: ' + req.url);
  //res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});

  if (req.url === '/index' || req.url === '/') {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/about.html', 'utf8').pipe(res);
  } else {
    res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
  }
  //let myReadStream = fs.createReadStream(__dirname + '/article.txt', 'utf8');
  //let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  //myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('port 3000'); 
