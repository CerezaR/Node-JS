let fs = require('fs');

let read = fs.readFileSync('text.txt', 'utf8');
let text = 'New text\n' + read;
let write = fs.writeFileSync('new_text.txt', text);
console.log(done);
