console.log('Hello world!')
console.log(__dirname);
console.log(__filename);

let things = require('./file_for_export');
console.log(things.some_value);
console.log(things.array_counter([1, 2, 3, 4, 5]));
console.log(things.multiply(5, 8));
