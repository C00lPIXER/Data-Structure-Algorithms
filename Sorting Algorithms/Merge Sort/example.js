/*
 * Merge Sort
 */

function sort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);

  let left = sort(array.slice(0, mid));
  let right = sort(array.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted,...left,...right];
}

console.log(sort([43, 32, 46, 76, 34, 4241, 23, 3112, 1, 12453, 54, 353]));
