/*
 * Selection Sort
 */

// Define an unsorted array
let array = [43, 65, 1, 23, 65, 12, 56, 2, 487, 386, 5623, 32];

// Outer loop to iterate through the entire array
for (let i = 0; i < array.length - 1; i++) {
  let min = i; // Assume the current index `i` holds the smallest element

  // Inner loop to find the smallest element in the unsorted portion of the array
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] < array[min]) {
      min = j; // Update `min` if a smaller element is found
    }
  }

  // Swap the smallest element with the current element at index `i`
  if (min != i) {
    [array[i], array[min]] = [array[min], array[i]];
  }
}

// Output the sorted array
console.log(array);
