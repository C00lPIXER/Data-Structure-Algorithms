//  ! Test case arrays

let arr1 = [64, 34, 25, 12, 22, 11, 90];

let arr2 = [34, 56, 3, 45, 12, 45, 89, 23, 45, 34, 43];

let arr3 = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let arr4 = [99, 88, 77, 66, 55, 44, 33, 22, 11];

let arr5 = ["a", "g", "f", "j", "h", "i", "d", "c", "e", "b", "k"];

/* __________________________________________________________________________________________________
 * 1. Sort an Array of Integers
 * Sort the array [12, 11, 13, 5, 6, 7] using Merge Sort.
 * __________________________________________________________________________________________________
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

  return [...sorted, ...left, ...right];
}

console.log(sort([...arr1]));
console.log(sort([...arr2]));
console.log(sort([...arr3]));
console.log(sort([...arr4]));
console.log(sort([...arr5]));

/* __________________________________________________________________________________________________
 * 2. Merge Two Sorted Arrays
 * Merge [1, 4, 7] and [2, 5, 8] into a single sorted array.
 * __________________________________________________________________________________________________
 */

function MergeTwoArray(left, right) {
  let sorted = [];

  if (left[0] < right[0]) {
    sorted.push(left.shift());
  } else {
    sorted.push(right.shift());
  }

  return [...sorted, ...right, ...left];
}

console.log(MergeTwoArray([1, 4, 7], [2, 5, 8]));

/* __________________________________________________________________________________________________
 * 3. Count Merges
 * Count the number of merge operations required to sort an array.
 * __________________________________________________________________________________________________
 */

let mergeOperations = 0;

function sortCount(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = sortCount(array.slice(0, mid));
  let right = sortCount(array.slice(mid));

  mergeOperations++;
  return mergesCount(left, right);
}

function mergesCount(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

console.log(sortCount([...arr1]));
console.log("Number of merge operations:", mergeOperations);

console.log(sortCount([...arr2]));
console.log("Number of merge operations:", mergeOperations);

console.log(sortCount([...arr3]));
console.log("Number of merge operations:", mergeOperations);

console.log(sortCount([...arr4]));
console.log("Number of merge operations:", mergeOperations);

console.log(sortCount([...arr5]));
console.log("Number of merge operations:", mergeOperations);

/* __________________________________________________________________________________________________
 * 4. Sort Strings Alphabetically
 * Use Merge Sort to sort an array of strings like ["pear", "apple", "orange"].
 * __________________________________________________________________________________________________
 */

function sortStr(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);

  let left = sortStr(array.slice(0, mid));
  let right = sortStr(array.slice(mid));

  return mergeStr(left, right);
}

function mergeStr(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

console.log(sortStr(["pear", "apple", "orange"]));

/* __________________________________________________________________________________________________
 * 5. Descending Order
 * Modify Merge Sort to sort the array in descending order.
 * __________________________________________________________________________________________________
 */

function sortDesc(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);

  let left = sortDesc(array.slice(0, mid));
  let right = sortDesc(array.slice(mid));

  return mergeDesc(left, right);
}

function mergeDesc(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

console.log(sortDesc([...arr1]));
console.log(sortDesc([...arr2]));
console.log(sortDesc([...arr3]));
console.log(sortDesc([...arr4]));
console.log(sortDesc([...arr5]));

/* __________________________________________________________________________________________________
 * 6. Sort Large Data
 * Use Merge Sort to handle sorting for a dataset with over 1,000,000 entries.
 * __________________________________________________________________________________________________
 */

function sortLargeData(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);

  let left = sortLargeData(array.slice(0, mid));
  let right = sortLargeData(array.slice(mid));

  return mergeLargeData(left, right);
}

function mergeLargeData(left, right) {
  let sorted = [];
  if (left[0] < right[0]) {
    sorted.push(left.shift());
  } else {
    sorted.push(right.shift());
  }

  console.log(sorted);
  return [...sorted, ...left, ...right];
}

console.log(sortLargeData([...arr1]));
console.log(sortLargeData([...arr2]));
console.log(sortLargeData([...arr3]));
console.log(sortLargeData([...arr4]));
console.log(sortLargeData([...arr5]));

/* __________________________________________________________________________________________________
 * 7. Find the Median
 * Use Merge Sort to find the median of an array.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 8. Sort by Custom Rule
 * Sort an array of objects by a custom rule, e.g., sort by the sum of digits in a number.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 9. Visualize Merge Steps
 * Write a program to visualize how subarrays are merged in each step.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 10. Analyze Time Complexity
 * Experiment with different sizes of datasets and observe Merge Sort's performance.
 * __________________________________________________________________________________________________
 */
