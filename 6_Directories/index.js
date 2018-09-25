let fs = require('fs');

/*fs.unlink('for_delete.txt', function() {
  console.log('deleted');
});*/

/*fs.mkdirSync('new-one');
console.log('New folder was created | sync');
fs.rmdirSync('new-one');
console.log('New folder was deleted | sync');*/

fs.mkdir('new-one', function() {
  fs.writeFile('./new-one/some_text.txt', 'some text', function() {
    console.log('Created new folder with txt file in it | async');
  });
});

fs.unlink('./new-one/some_text.txt', function () {
  fs.rmdir('new-one', function() {
    console.log('Delet new folder with txt file in it | async');
  });
});
