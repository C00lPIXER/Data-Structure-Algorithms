/**
 * Remove all duplicate elements from an array.
 */

const array = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 100];

function findDuplicate(array) {
  let obj = {};
  let duplicate = [];
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = (obj[array[i]] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      duplicate.push(key);
    }
  }
  return duplicate;
}

console.log(findDuplicate(array));
