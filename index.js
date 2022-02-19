var sum = 0;
module.exports = function add_array(...array) {
  sum = 0;
  if (array) d(...array);

  return sum;
};
var d = (...array) => {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") sum += array[i];
    if (typeof array[i] === "string") {
    }
    if (typeof array[i] === "object") d(...array[i]);
  }
};
