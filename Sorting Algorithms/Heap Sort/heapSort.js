//~ Heap Sort

function heapSort(array) {
  const n = array.length;

  // Build the max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  // Extract elements from the heap
  for (let i = n - 1; i > 0; i--) {
    // Swap the root (largest element) with the last element
    [array[0], array[i]] = [array[i], array[0]];

    // Restore the heap property for the reduced heap
    heapify(array, i, 0);
  }

  return array;
}

function heapify(array, n, i) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child index
  const right = 2 * i + 2; // Right child index

  // Check if the left child is larger than the root
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  // Check if the right child is larger than the largest so far
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  // If the largest is not the root
  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];

    // Recursively heapify the affected subtree
    heapify(array, n, largest); // Pass `largest`, not `i`
  }
}

// Example usage
let array = [12, 34, 56, 32, 78, 12, 54, 12, 76, 2];
console.log(array);          
console.log(heapSort(array));

