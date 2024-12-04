//  ! Test case arrays

let arr1 = [64, 34, 25, 12, 22, 11, 90];

let arr2 = [34, 56, 3, 45, 12, 45, 89, 23, 45, 34, 43];

let arr3 = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let arr4 = [99, 88, 77, 66, 55, 44, 33, 22, 11];

let arr5 = ["a", "g", "f", "j", "h", "i", "d", "c", "e", "b", "k"];

/* __________________________________________________________________________________________________
 * 1. Sort an Array of Integers
 * Sort the array [29, 10, 14, 37, 13] using Selection Sort.
 * __________________________________________________________________________________________________
 */

function sort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  return array;
}

console.log(sort([...arr1]));
console.log(sort([...arr2]));
console.log(sort([...arr3]));
console.log(sort([...arr4]));
console.log(sort([...arr5]));

/* __________________________________________________________________________________________________
 * 2. Track Minimum Element Index
 * During the sorting process, print the index of the minimum element at each step.
 * __________________________________________________________________________________________________
 */

function minimumElement(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        console.log("Minimum Element Index:", j);
        min = j;
      }
    }
    if (min !== i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  return array;
}

console.log(minimumElement([...arr1]));
console.log(minimumElement([...arr2]));
console.log(minimumElement([...arr3]));
console.log(minimumElement([...arr4]));
console.log(minimumElement([...arr5]));

/* __________________________________________________________________________________________________
 * 3. Find the Largest Element
 * Modify Selection Sort to find the largest element in the array without sorting it completely.
 * __________________________________________________________________________________________________
 */



/* __________________________________________________________________________________________________
 * 4. Sort Strings Alphabetically
 * Sort an array of strings like ["grape", "apple", "mango"].
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 5. Sort Strings by Length
 * Sort an array of strings by their lengths.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 6. Selection Sort in Descending Order
 * Modify the algorithm to sort the array in descending order.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 7. Find the k Largest Elements
 * Use Selection Sort to find the top k largest elements.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 8. Track Swap Operations
 * Count the number of swaps required to sort the array.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 9. Sort Object Properties
 * Sort an array of objects by a numeric property, e.g., [{id: 1}, {id: 3}, {id: 2}].
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 10. Visualize the Algorithm
 * Write a program to visualize the steps of Selection Sort.
 * __________________________________________________________________________________________________
 */
