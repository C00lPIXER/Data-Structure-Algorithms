/*
 * Quick Sort
 */

function partition(array, lb, ub) {
  let pivot = array[lb];
  let start = lb;
  let end = ub;

  while (start < end) {
    while (array[start] <= pivot) {
      start++;
    }

    while (array[end] > pivot) {
      end--;
    }

    if (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
    }
  }

  [array[lb], array[end]] = [array[end], array[lb]];
  return end;
}

function sort(array, lb, ub) {
  if (lb < ub) {
    let loc = partition(array, lb, ub);
    sort(array, lb, loc - 1);
    sort(array, loc + 1, ub);
  }
  return array;
}

const array = [11, 99, 22, 44, 33, 55, 77, 66, 88, 100];

console.log(sort(array, 0, 9));
