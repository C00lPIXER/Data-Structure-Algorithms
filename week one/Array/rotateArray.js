/**
 * Implement a program to rotate an array by k positions to the right.
 */

const array = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

function rotateArray(array, k) {
  while (k > 0) {
    array.unshift(array[array.length - 1]);
    array.pop();
    k--;
  }
  return array;
}

console.log(rotateArray(array, 4));
