/*
 * Bubble Sort Example
 */

// Define the function `bubbleSort` that takes an array as input
function bubbleSort(array) {
  // Outer loop to control the number of passes through the array
  // After each pass, the largest unsorted element "bubbles" to its correct position
  for (let i = 0; i < array.length - 1; i++) {
    
    // Inner loop to compare adjacent elements
    // Stops at `array.length - 1 - i` because the last `i` elements are already sorted
    for (let j = 0; j < array.length - 1 - i; j++) {
      
      // Compare the current element with the next element
      if (array[j] > array[j + 1]) {
        
        // Swap the two elements if they are in the wrong order
        let temp = array[j];        // Temporarily store the current element
        array[j] = array[j + 1];    // Move the next element to the current position
        array[j + 1] = temp;        // Place the current element in the next position
      }
    }
  }

  // Return the sorted array after all passes
  return array;
}

// Initialize an unsorted array
const array = [100, 11, 33, 55, 66, 22, 77, 88, 44, 99];

// Call the `bubbleSort` function with the array and log the sorted result
console.log(bubbleSort(array));

