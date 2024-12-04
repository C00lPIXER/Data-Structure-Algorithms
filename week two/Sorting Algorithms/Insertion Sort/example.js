/*
 * Insertion Sort
 */

// Define the array to be sorted
let array = [34, 12, 56, 23, 57, 7, 43, 1, 12];

// Loop through the array starting from the second element (index 1)
// Because the first element is considered already sorted
for (let i = 1; i < array.length; i++) {
  // Store the current element in a temporary variable
  let temp = array[i];
  
  // Initialize `j` to point to the index of the last sorted element
  let j = i - 1;

  // Shift elements of the sorted portion of the array to the right
  // As long as they are greater than `temp`
  while (j >= 0 && array[j] > temp) {
    array[j + 1] = array[j]; // Move the larger element one position to the right
    j--; // Decrement `j` to check the next element to the left
  }

  // Insert the `temp` (current element) into its correct sorted position
  array[j + 1] = temp;
}

// Output the sorted array
console.log(array);
