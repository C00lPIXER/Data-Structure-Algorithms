/** ? 1 Given an array of 'n' elements and a target elemaent 't' in the array.
 * return -1 if the target element is not fount.*/

const array = [-5, 2, 10, 4, 6];

function search(n, t) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) return i;
  }

  return -1;
}

console.log("index of the element", search(array, 4));