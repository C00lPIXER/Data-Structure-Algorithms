/**
 * Write a recursive function to compute the sum of all elements in an array.
 */

function sum(array) {
  if (array.length === 0) return 0;
  return array[0] + sum(array.slice(1));
}

console.log(sum([1, 2, 3, 4, 5]));
