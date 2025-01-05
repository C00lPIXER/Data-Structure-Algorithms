/**
 * Given a sorted array of 'n' elements and a target element
 * 't', find the index of 't' in the array. return -1 the target
 *  element is not found.
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function search(n, t) {
  let left = 0;
  let right = n.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (t === n[middle]) {
      return middle;
    }

    if (t < n[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

console.log("index of element", search(array, 5));

// recursive way

function recursiveSearch(n, t) {
  return search(n, t, 0, n.length - 1);
}

console.log(recursiveSearch([1, 2, 3, 4], 4));
