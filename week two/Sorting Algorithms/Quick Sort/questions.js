//  ! Test case arrays

let arr1 = [64, 34, 25, 12, 22, 11, 90];

let arr2 = [34, 56, 3, 45, 12, 45, 89, 23, 45, 34, 43];

let arr3 = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let arr4 = [99, 88, 55, 77, 55, 66, 55, 44, 55, 33, 22, 11];

let arr5 = ["a", "g", "f", "j", "h", "i", "d", "c", "e", "b", "k"];

/* __________________________________________________________________________________________________
 * 1. Sort an Array of Integers
 * Sort the array [10, 7, 8, 9, 1, 5] using Quick Sort.
 * __________________________________________________________________________________________________
 */

function sort(array) {
  if (array.length <= 1) return array;
  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...sort(left), pivot, ...sort(right)];
}

console.log(sort([...arr1]));
console.log(sort([...arr2]));
console.log(sort([...arr3]));
console.log(sort([...arr4]));
console.log(sort([...arr5]));

/* __________________________________________________________________________________________________
 * 2. Partitioning Logic
 * Implement only the partitioning logic of Quick Sort and print the partitions.
 * __________________________________________________________________________________________________
 */

function partitioningLogic(array) {
  if (array.length <= 1) return array;
  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  console.log("left:", left, "right:", right);
  return [...partitioningLogic(left), pivot, ...partitioningLogic(right)];
}

console.log(partitioningLogic([...arr2]));

/* __________________________________________________________________________________________________
 * 3. Different Pivot Choices
 * Experiment with choosing the first, last, and middle element as the pivot.
 * __________________________________________________________________________________________________
 */

function differentPivot(array) {
  if (array.length <= 1) return array;
  let pivot = array[Math.floor(array.length / 2)];
  // let pivot = array[array.length - 1];
  // let pivot = array[0];
  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }
  return [...differentPivot(left), ...equal, ...differentPivot(right)];
}

console.log(differentPivot([...arr1]));
console.log(differentPivot([...arr2]));
console.log(differentPivot([...arr3]));
console.log(differentPivot([...arr4]));
console.log(differentPivot([...arr5]));

/* __________________________________________________________________________________________________
 * 4. Sort Strings
 * Use Quick Sort to sort strings alphabetically, e.g., ["apple", "orange", "banana"].
 * __________________________________________________________________________________________________
 */

function sortStr(array) {
  if (array.length <= 1) return array;
  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...sortStr(left), pivot, ...sortStr(right)];
}

console.log(sortStr(["apple", "orange", "banana"]));

/* __________________________________________________________________________________________________
 * 5. Sort in Descending Order
 * Modify Quick Sort to sort an array in descending order.
 * __________________________________________________________________________________________________
 */

function sortDesc(array) {
  if (array.length <= 1) return array;

  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...sortDesc(left), pivot, ...sort(right)];
}

console.log(sortDesc([...arr3]));

/* __________________________________________________________________________________________________
 * 6. Find the k Smallest Element
 * Use Quick Sort to find the kth smallest element in an array.
 * __________________________________________________________________________________________________
 */

function findSmallest(array) {
  if (array.length <= 1) return array;

  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...findSmallest(left), pivot, ...findSmallest(right)];
}

console.log(findSmallest([...arr1]));
console.log(findSmallest([...arr2]));
console.log(findSmallest([...arr3]));
console.log(findSmallest([...arr4]));
console.log(findSmallest([...arr5]));

/* __________________________________________________________________________________________________
 * 7. Count Recursive Calls
 * Count the number of recursive calls made by the Quick Sort algorithm.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 8. Sort Floats
 * Sort an array of floating-point numbers like [3.1, 1.4, 5.9, 2.6].
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 9. Sort Object Properties
 * Sort an array of objects by a string property, e.g., [{name: "Zara"}, {name: "Anna"}].
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 10. Compare Execution Time
 * Compare Quick Sort's performance with Bubble Sort on large datasets.
 * __________________________________________________________________________________________________
 */
