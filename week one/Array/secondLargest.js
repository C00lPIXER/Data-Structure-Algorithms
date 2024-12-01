/**
 * Write a function to find the second largest element in an array.
 */

const array = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

function secondLargest(array) {
  let result = [-Infinity, -Infinity];

  for (let i = 0; i < array.length; i++) {
    if (result[0] < array[i]) {
      result[1] = result[0];
      result[0] = array[i];
    } else if (result[1] < array[i] && array[i] < result[0]) {
      result[1] = array[i];
    }
  }
  return result[1];
}

console.log(secondLargest(array));
