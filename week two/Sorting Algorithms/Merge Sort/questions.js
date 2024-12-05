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
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
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

/* __________________________________________________________________________________________________
 * 3. Count Merges
 * Count the number of merge operations required to sort an array.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 4. Sort Strings Alphabetically
 * Use Merge Sort to sort an array of strings like ["pear", "apple", "orange"].
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 5. Descending Order
 * Modify Merge Sort to sort the array in descending order.
 * __________________________________________________________________________________________________
 */

/* __________________________________________________________________________________________________
 * 6. Sort Large Data
 * Use Merge Sort to handle sorting for a dataset with over 1,000,000 entries.
 * __________________________________________________________________________________________________
 */

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
