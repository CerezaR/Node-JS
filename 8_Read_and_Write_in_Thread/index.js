let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/article.txt', 'utf8');
let myWriteStream= fs.createWriteStream(__dirname + '/news.txt');

myReadStream.on('data', function (chunk) {
  console.log('New data: \n' + chunk );
  myWriteStream.write(chunk);
});

myReadStream.pipe(myWriteStream);
