let array_counter = function(array) {
  return array.length;
};

module.exports.multiply = function (x, y) {
  return `${x} * ${y} = ${x*y}`;
};

module.exports.some_value = 1;
module.exports.array_counter = array_counter;

//module.exports = {
//  some_value: some_value
//};
