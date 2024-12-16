//  ! Test case arrays

let arr1 = [64, 34, 25, 12, 22, 11, 90];

let arr2 = [34, 56, 3, 45, 12, 45, 89, 23, 45, 34, 43];

let arr3 = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let arr4 = [99, 88, 77, 66, 55, 44, 33, 22, 11];

let arr5 = ["a", "g", "f", "j", "h", "i", "d", "c", "e", "b", "k"];

/* _______________________________________________________________________________________________________________
 * 1. Sort an Array of Integers
 * Sort the array [12, 11, 13, 5, 6] using Insertion Sort.
 * _______________________________________________________________________________________________________________
 */

function sort(array) {
  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(sort([...arr1]));
console.log(sort([...arr2]));
console.log(sort([...arr3]));
console.log(sort([...arr4]));
console.log(sort([...arr5]));

/* _______________________________________________________________________________________________________________
 * 2. Insertion Sort for Strings
 * Sort an array of strings alphabetically using Insertion Sort.
 * _______________________________________________________________________________________________________________
 */

function sortStr(array) {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(sortStr([...arr5]));

/* _______________________________________________________________________________________________________________
 * 3. Descending Order
 * Modify Insertion Sort to sort an array in descending order.
 * _______________________________________________________________________________________________________________
 */

function sortDesc(array) {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] < key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(sortDesc([...arr1]));
console.log(sortDesc([...arr2]));
console.log(sortDesc([...arr3]));
console.log(sortDesc([...arr4]));
console.log(sortDesc([...arr5]));

/* _______________________________________________________________________________________________________________
 * 4. Find the k Smallest Elements
 * Use Insertion Sort to find the smallest k elements in an array.
 * _______________________________________________________________________________________________________________
 */

function findSmall(array) {
  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array[0];
}

console.log(findSmall([...arr1]));
console.log(findSmall([...arr2]));
console.log(findSmall([...arr3]));
console.log(findSmall([...arr4]));

/* _______________________________________________________________________________________________________________
 * 5. Insertion in a Sorted Array
 * Insert an element into its correct position in an already sorted array.
 * _______________________________________________________________________________________________________________
 */

function SortedArray(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (val < array[i]) {
      array.splice(i, 0, val);
      return array;
    }
  }
  array.push(val);
  return array;
}

console.log(SortedArray([...arr3], 1));

/* _______________________________________________________________________________________________________________
 * 6. Sort Partially Sorted Data
 * Sort an array where the elements are mostly sorted except for a few outliers.
 * _______________________________________________________________________________________________________________
 */

function partiallySorted(array) {
  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && key < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }

  return array;
}

console.log(partiallySorted([...arr1]));
console.log(partiallySorted([...arr2]));
console.log(partiallySorted([...arr3]));
console.log(partiallySorted([...arr4]));

/* _______________________________________________________________________________________________________________
 * 7. Reverse Order
 * Use Insertion Sort to arrange numbers in reverse order.
 * _______________________________________________________________________________________________________________
 */

function reverseOrder(array) {
  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && key < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(reverseOrder([...arr3]));

/* _______________________________________________________________________________________________________________
 * 8. Sort a Subarray
 * Apply Insertion Sort only to a specific portion of the array.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 9. Handle Duplicates
 * Implement Insertion Sort to handle an array with duplicate elements.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 10. Analyze Time Complexity
 * Experiment with datasets of different sizes and observe how Insertion Sort behaves.
 * _______________________________________________________________________________________________________________
 */
