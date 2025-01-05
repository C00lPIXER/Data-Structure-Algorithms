/**
 * Find the pair of numbers in an array that sum up to a given target.
 */

const array = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

function findPair(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i], array[j]];
      }
    }
  }
  return null;
}

console.log(findPair(array, 55));
