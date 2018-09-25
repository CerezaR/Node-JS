let fs = require('fs');

fs.readFile('text.txt', 'utf8', function(err, data) {
  console.log(data);
});
fs.writeFile('new_text.txt', 'new text', function() {console.log('wrote');});
console.log('test');
