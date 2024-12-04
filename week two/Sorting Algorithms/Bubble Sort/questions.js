//  ! Test case arrays

let arr1 = [64, 34, 25, 12, 22, 11, 90];

let arr2 = [34, 56, 3, 45, 12, 45, 89, 23, 45, 34, 43];

let arr3 = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let arr4 = [99, 88, 77, 66, 55, 44, 33, 22, 11];

/* _______________________________________________________________________________________________________________
 * 1.Sort an Array of Integers
 * Sort the array [64, 34, 25, 12, 22, 11, 90] using Bubble Sort.
 * _______________________________________________________________________________________________________________
 */

function sort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j + 1] < array[j]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

console.log(sort([...arr1]));
console.log(sort([...arr2]));
console.log(sort([...arr3]));
console.log(sort([...arr4]));

/* _______________________________________________________________________________________________________________
 * 2.Count Swaps
 * Modify Bubble Sort to count the number of swaps required to sort the array.
 * _______________________________________________________________________________________________________________
 */

function swapsCount(array) {
  let conut = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length - 1 - i; j++) {
      if (array[j + 1] < array[j]) {
        conut++;
      }
    }
  }
  return conut;
}

console.log(swapsCount([...arr1]));
console.log(swapsCount([...arr2]));
console.log(swapsCount([...arr3]));
console.log(swapsCount([...arr4]));

/* _______________________________________________________________________________________________________________
 * 3.Check Early Termination
 * Implement an optimized Bubble Sort that terminates early if the array is already sorted.
 * _______________________________________________________________________________________________________________
 */

function optimizer(array) {
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let flag = 0;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j + 1] < array[j]) {
        count++;
        flag++;
      }
    }
    if (flag) break;
  }
  return count;
}

console.log(optimizer([...arr1]));
console.log(optimizer([...arr2]));
console.log(optimizer([...arr3]));
console.log(optimizer([...arr4]));

/* _______________________________________________________________________________________________________________
 * 4.Sort Strings
 * Use Bubble Sort to sort an array of strings alphabetically, e.g., ["banana", "apple", "cherry"].
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 5. Descending Order
 * Modify Bubble Sort to sort an array in descending order.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 6. Sort by Length
 * Sort an array of strings by their lengths, e.g., ["dog", "elephant", "cat"].
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 7. Largest k Elements
 * Use Bubble Sort to find the top k largest elements in an array.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 8. Find the Median
 * Sort the array using Bubble Sort and find the median element.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 9. Sort an Array of Objects
 * Sort an array of objects by a specific property, e.g., {name: "John", age: 25} by age.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 10. Compare Execution Time
 * Measure the execution time of Bubble Sort for large datasets and compare it with other sorting algorithms.
 * _______________________________________________________________________________________________________________
 */
