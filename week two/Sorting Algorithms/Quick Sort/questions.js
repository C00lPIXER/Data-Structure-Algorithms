//  ! Test case arrays

let arr1 = [64, 34, 25, 12, 22, 11, 90];

let arr2 = [34, 56, 3, 45, 12, 45, 89, 23, 45, 34, 43];

let arr3 = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let arr4 = [99, 88, 77, 66, 55, 44, 33, 22, 11];

let arr5 = ["a", "g", "f", "j", "h", "i", "d", "c", "e", "b", "k"];

/* __________________________________________________________________________________________________
 * 1. Sort an Array of Integers
 * Sort the array [10, 7, 8, 9, 1, 5] using Quick Sort.
 * __________________________________________________________________________________________________
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

console.log(sort([...arr1], 0, arr1.length - 1));
console.log(sort([...arr2], 0, arr2.length - 1));
console.log(sort([...arr3], 0, arr3.length - 1));
console.log(sort([...arr4], 0, arr4.length - 1));
console.log(sort([...arr5], 0, arr5.length - 1));

/* __________________________________________________________________________________________________
 * 2. Partitioning Logic
 * Implement only the partitioning logic of Quick Sort and print the partitions.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 3. Different Pivot Choices
 * Experiment with choosing the first, last, and middle element as the pivot.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 4. Sort Strings
 * Use Quick Sort to sort strings alphabetically, e.g., ["apple", "orange", "banana"].
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 5. Sort in Descending Order
 * Modify Quick Sort to sort an array in descending order.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 6. Find the k Smallest Element
 * Use Quick Sort to find the kth smallest element in an array.
 * __________________________________________________________________________________________________
 */

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
