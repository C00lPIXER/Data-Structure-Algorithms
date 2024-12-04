### **Detailed Roadmap for Your Learning Goals**

This roadmap breaks your goals into actionable steps, providing a structured way to learn the required concepts and complete relevant exercises.

---

#### **1. Sorting Algorithms**
Learn each sorting algorithm by understanding its logic, complexity, and application. Practice implementations and sample problems.

**1.1 Bubble Sort**
- **Concept**: Repeatedly compare adjacent elements and swap them if out of order until the entire array is sorted.
- **Plan**:  
  - Learn the algorithm with a visual example.  
  - Analyze time complexity (`O(n^2)` in the worst case).  
  - Implement Bubble Sort in JavaScript.  
  - Complete 3 workouts:  
    1. Sort an array of integers.  
    2. Find how many swaps were required to sort an array.  
    3. Modify the algorithm to sort in descending order.  

**1.2 Insertion Sort**
- **Concept**: Build the sorted array one element at a time by inserting elements into their correct positions.  
- **Plan**:  
  - Understand its use for small datasets and nearly sorted arrays.  
  - Learn its time complexity (`O(n^2)` in worst case).  
  - Implement the algorithm in JavaScript.  
  - Complete 3 workouts:  
    1. Sort an array of strings alphabetically.  
    2. Count the number of shifts during the sorting process.  
    3. Sort a subarray using Insertion Sort.  

**1.3 Selection Sort**
- **Concept**: Divide the array into a sorted and unsorted region. Repeatedly select the smallest element from the unsorted region and place it in the sorted region.  
- **Plan**:  
  - Study the algorithm's behavior and time complexity (`O(n^2)`).  
  - Implement Selection Sort in JavaScript.  
  - Complete 3 workouts:  
    1. Sort an array of floating-point numbers.  
    2. Find the index of the smallest element in each pass.  
    3. Modify it to sort in reverse order.  

**1.4 Quick Sort**
- **Concept**: Use a pivot element to partition the array into smaller and larger elements recursively.  
- **Plan**:  
  - Learn the divide-and-conquer approach.  
  - Analyze time complexity (`O(n log n)` on average).  
  - Implement the algorithm in JavaScript.  
  - Complete 3 workouts:  
    1. Sort an array using the first element as the pivot.  
    2. Implement Quick Sort for a linked list.  
    3. Analyze the number of recursive calls made during sorting.  

**1.5 Merge Sort**
- **Concept**: Recursively divide the array into halves, sort each half, and merge them back together.  
- **Plan**:  
  - Learn its stability and time complexity (`O(n log n)`).  
  - Implement Merge Sort in JavaScript.  
  - Complete 3 workouts:  
    1. Sort an array of objects by a specific property.  
    2. Count the number of inversions in an array.  
    3. Modify Merge Sort to sort only a subarray.  

---

#### **2. Stacks and Queues**
Master these foundational data structures by implementing their operations and solving problems.

**2.1 Stack**
- **Key Operations**:  
  - **PUSH**: Add an element to the top of the stack.  
  - **POP**: Remove the top element of the stack.  
  - **DISPLAY**: Show all elements in the stack.  
- **Plan**:  
  - Implement a stack using arrays and linked lists.  
  - Complete 3 workouts:  
    1. Check if a sequence of brackets is balanced using a stack.  
    2. Implement undo functionality for a text editor.  
    3. Convert an infix expression to postfix using stacks.  

**2.2 Queue**
- **Key Operations**:  
  - **ENQUEUE**: Add an element to the end of the queue.  
  - **DEQUEUE**: Remove the element from the front of the queue.  
  - **DISPLAY**: Show all elements in the queue.  
- **Plan**:  
  - Implement a queue using arrays and linked lists.  
  - Complete 3 workouts:  
    1. Simulate a printer queue system.  
    2. Implement a circular queue.  
    3. Solve the "Josephus problem" using queues.  

---

#### **3. Hash Tables**
Explore the concept of hash tables for efficient data retrieval and manipulation.

**Plan**:  
- Learn how hash functions work and handle collisions (chaining or open addressing).  
- Implement a hash table in JavaScript.  
- Complete 3 workouts:  
  1. Design a hash table for storing user information (e.g., email and name).  
  2. Implement a phone directory using hash tables.  
  3. Solve a "two-sum" problem using hash maps for faster lookup.  

---

#### **4. Applications**
Apply what you've learned to understand real-world uses and solve problems.

**Applications of Sorting Algorithms**  
- Organize datasets like user records, financial transactions, or search results.  

**Applications of Stack and Queue**  
- **Stack**: Undo-redo functionality, expression evaluation, and backtracking algorithms.  
- **Queue**: Task scheduling, breadth-first search in graphs, and simulations (e.g., traffic systems).  

**Applications of Hash Tables**  
- Fast lookups in databases, caching mechanisms, and implementing sets/maps in programming.  

**Plan for Applications**:  
- Solve at least 3 competitive coding problems on HackerRank, CodeChef, LeetCode, or AlgoExpert to solidify understanding.  

---

<!------------------------------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------------------->

### **1. Sorting Algorithms**

### **Sorting Algorithm Classification Overview**

Sorting algorithms are crucial in computer science for ordering elements in an array. They help reinforce fundamental concepts like Big-O notation, recursion, and divide-and-conquer strategies. Sorting algorithms are broadly classified into **comparison-based** and **non-comparison-based** methods.

---

### **Types of Sorting Algorithms**

#### 1. **Comparison-Based Sorting Algorithms**
- **Definition**: Compare elements at each step to determine their correct order.
- **Performance Bound**: These algorithms have a theoretical lower bound of \( O(n \log n) \).
- **Examples**:
  - **Bubble Sort**: Iteratively compares and swaps adjacent elements if out of order.
  - **Insertion Sort**: Places each element in its correct position by comparing it with the sorted portion.
  - **Merge Sort**: Uses divide-and-conquer by splitting the array, sorting the subarrays, and merging them.
  - **Quick Sort**: Selects a pivot, partitions the array around it, and sorts the subarrays recursively.
  - **Heap Sort**: Builds a heap from the array, extracts the maximum/minimum repeatedly, and sorts the elements.

#### 2. **Non-Comparison-Based Sorting Algorithms**
- **Definition**: Avoid direct comparisons; utilize other properties of data (e.g., numerical properties).
- **Performance Potential**: Can achieve \( O(n) \) time complexity under specific conditions.
- **Examples**:
  - **Counting Sort**: Counts occurrences of each element and uses this count to place elements directly.
  - **Radix Sort**: Sorts numbers digit by digit starting from the least significant to the most significant.
  - **Bucket Sort**: Distributes elements into buckets, sorts each bucket, and concatenates them.

---

### **Characteristics of Sorting Algorithms**

1. **Time Complexity**:
   - Best, average, and worst-case performance (e.g., Quick Sort is \( O(n^2) \) in the worst case but \( O(n \log n) \) on average).
2. **Space Complexity**:
   - Measures additional memory usage (e.g., Merge Sort uses \( O(n) \) extra space, while Heap Sort is \( O(1) \)).
3. **Stability**:
   - A stable sort maintains the relative order of elements with equal keys (e.g., Merge Sort is stable, while Quick Sort is not inherently stable).

---

### **Factors for Choosing a Sorting Algorithm**

1. **Size of the Array**:
   - Small arrays: Insertion Sort may outperform due to its simplicity and low overhead.
   - Large arrays: Merge Sort or Quick Sort may be more efficient.

2. **Data Characteristics**:
   - For nearly sorted data, Insertion Sort or Bubble Sort (optimized) can be faster.
   - For uniformly distributed numbers, Radix Sort or Bucket Sort may be ideal.

3. **Memory Constraints**:
   - Algorithms like Quick Sort (in-place) and Heap Sort are preferable when memory is limited.

4. **Stability Requirements**:
   - Stable algorithms (e.g., Merge Sort) are needed when the relative order of equal elements must be preserved.

---

<!------------------------------------------------------------------------------------------------------------------------->

### **Bubble Sort in Detail**

Bubble Sort is one of the simplest sorting algorithms. It repeatedly compares adjacent elements in an array and swaps them if they are in the wrong order. This process continues until the array is fully sorted.

---

#### **How It Works**
1. Start at the beginning of the array.
2. Compare the first pair of adjacent elements.
3. Swap the elements if the left one is greater than the right one.
4. Move to the next pair and repeat until the end of the array.
5. Repeat the process for the remaining unsorted portion of the array.
6. Stop when no swaps are needed (array is sorted).

---

#### **Real-Life Analogy**
Imagine sorting a row of books by height:
- You compare two books side by side.
- If the taller book is on the left, swap them.
- Continue until you've checked all the books.
- Start again from the beginning, ignoring the books already sorted at the end.
- Repeat until all books are in order.

---

#### **Algorithm**
1. Iterate through the array multiple times.
2. For each iteration, compare adjacent elements.
3. Swap them if they are out of order.
4. Gradually "bubble" the largest elements to the end.

---

#### **Code Implementation in JavaScript**
```javascript
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if out of order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // If no swaps were made, array is sorted
        if (!swapped) break;
    }
    return arr;
}

// Example usage:
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", bubbleSort(numbers));
```

---

#### **Key Observations**
1. **Best Case (Already Sorted Array)**: 
   - Complexity: `O(n)`
   - Explanation: Only one pass is needed with no swaps.
2. **Worst Case (Reverse Order Array)**:
   - Complexity: `O(n^2)`
   - Explanation: Maximum number of comparisons and swaps.
3. **Space Complexity**:
   - `O(1)` (in-place sorting, no extra memory required).

---

#### **Sample Workouts**
1. **Sort an Array of Numbers**:  
   Given `[5, 1, 4, 2, 8]`, sort it using Bubble Sort.
2. **Count Swaps**:  
   Modify Bubble Sort to count how many swaps are needed to sort the array.
3. **Descending Order**:  
   Adapt Bubble Sort to sort an array in descending order.

---

#### **Advantages**
- Simple to understand and implement.
- Effective for small datasets or nearly sorted arrays.

#### **Disadvantages**
- Inefficient for large datasets due to its quadratic time complexity.

<!------------------------------------------------------------------------------------------------------------------------->

### **Insertion Sort in Detail**

Insertion Sort is a simple sorting algorithm that builds the sorted array one element at a time. It works by taking each element from the unsorted portion and inserting it into the correct position in the sorted portion.

---

#### **How It Works**
1. Start with the first element (consider it "sorted").
2. Pick the next element.
3. Compare it with the elements in the "sorted" portion of the array.
4. Shift elements in the sorted portion as needed to make space.
5. Insert the element into its correct position.
6. Repeat for all elements until the entire array is sorted.

---

#### **Real-Life Analogy**
Imagine sorting playing cards in your hand:
- You start with one card (already sorted).
- Pick up the next card and place it in the correct position relative to the sorted cards.
- Repeat this for every card in the deck.

---

#### **Algorithm**
1. Start at the second element (index 1) since the first element is already sorted.
2. Compare the current element with the elements in the sorted portion.
3. Shift larger elements one position to the right to make room for the current element.
4. Insert the current element into its correct position.
5. Repeat for all elements.

---

#### **Code Implementation in JavaScript**
```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Element to be inserted
        let j = i - 1;

        // Shift elements of the sorted portion to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insert the key at the correct position
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let numbers = [12, 11, 13, 5, 6];
console.log("Sorted Array:", insertionSort(numbers));
```

---

#### **Key Observations**
1. **Best Case (Already Sorted Array)**:
   - Complexity: `O(n)` (only one comparison per element).
2. **Worst Case (Reverse Order Array)**:
   - Complexity: `O(n^2)` (maximum comparisons and shifts).
3. **Space Complexity**:
   - `O(1)` (in-place sorting, no extra memory required).

---

#### **Sample Workouts**
1. **Sort an Array of Numbers**:  
   Given `[9, 3, 7, 1, 4]`, sort it using Insertion Sort.
2. **Sort Strings Alphabetically**:  
   Sort an array of strings (e.g., `["apple", "orange", "banana"]`) alphabetically using Insertion Sort.
3. **Find Shifts**:  
   Modify Insertion Sort to count how many shifts occur during sorting.

---

#### **Advantages**
- Simple and intuitive.
- Works efficiently for small or nearly sorted datasets.
- Stable sort: maintains the relative order of equal elements.

#### **Disadvantages**
- Inefficient for large datasets due to its quadratic time complexity.

<!------------------------------------------------------------------------------------------------------------------------->
### **Selection Sort in Detail**

Selection Sort is a simple comparison-based sorting algorithm. It divides the array into two parts: a sorted portion and an unsorted portion. The algorithm repeatedly selects the smallest element from the unsorted portion and places it at the end of the sorted portion.

---

#### **How It Works**
1. Start with the first element of the array.
2. Find the smallest element in the entire array and swap it with the first element.
3. Move to the second element and find the smallest element in the unsorted portion.
4. Swap the smallest element with the current element.
5. Repeat this process for all elements until the array is sorted.

---

#### **Real-Life Analogy**
Imagine arranging books in a row by height:
- You scan the entire row to find the shortest book.
- Swap it with the first book.
- Move to the next position and repeat the process with the remaining books.

---

#### **Algorithm**
1. Loop through the array from the first to the second-to-last element.
2. For each iteration, assume the current index is the smallest (`minIndex`).
3. Compare all subsequent elements to find the actual smallest element.
4. Swap the smallest element with the element at `minIndex`.
5. Repeat until the array is sorted.

---

#### **Code Implementation in JavaScript**
```javascript
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the first element of the unsorted portion is the smallest
        let minIndex = i;

        // Find the smallest element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found smallest element with the first element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Example usage:
let numbers = [64, 25, 12, 22, 11];
console.log("Sorted Array:", selectionSort(numbers));
```

---

#### **Key Observations**
1. **Best Case**:  
   - Complexity: `O(n^2)` (Selection Sort always performs the same number of comparisons).  
   - Explanation: Even if the array is already sorted, it will still scan the unsorted portion for the smallest element.  

2. **Worst Case**:  
   - Complexity: `O(n^2)` (maximum number of comparisons and swaps).  
   - Explanation: For each element, all remaining elements are compared.  

3. **Space Complexity**:  
   - `O(1)` (in-place sorting, no extra memory required).  

---

#### **Sample Workouts**
1. **Sort Numbers**:  
   Use Selection Sort to sort `[8, 3, 7, 1, 4]` in ascending order.  

2. **Sort Strings by Length**:  
   Modify Selection Sort to arrange an array of strings by their lengths (e.g., `["apple", "kiwi", "banana"]`).  

3. **Find the Kth Smallest Element**:  
   Use Selection Sort to find the `k`th smallest element in an array without fully sorting it.  

---

#### **Advantages**
- Easy to understand and implement.
- Useful for small datasets where simplicity is prioritized.  

#### **Disadvantages**
- Inefficient for large datasets due to quadratic time complexity.
- Performs unnecessary comparisons even if the array is partially sorted.

<!------------------------------------------------------------------------------------------------------------------------->

### **### **Quick Sort in Detail**

Quick Sort is a highly efficient sorting algorithm that uses the divide-and-conquer approach. It works by selecting a **pivot element** and partitioning the array into two subarrays: elements smaller than the pivot and elements larger than the pivot. The process is repeated recursively until the array is sorted.

---

#### **How It Works**
1. Choose a pivot element from the array (commonly the last element, first element, or a random element).
2. Rearrange the array so that:
   - Elements smaller than the pivot go to the left.
   - Elements greater than the pivot go to the right.
3. The pivot is now in its correct position.
4. Recursively apply the same process to the left and right subarrays.

---

#### **Real-Life Analogy**
Imagine organizing a bookshelf:
- Pick a book as the "pivot."
- Move books shorter than the pivot to the left and taller ones to the right.
- Repeat the process for the left and right sections until all books are arranged.

---

#### **Algorithm**
1. Choose a pivot element.
2. Partition the array such that all elements smaller than the pivot are on the left, and all elements larger are on the right.
3. Recursively apply the steps to the left and right subarrays.
4. Combine the results for a fully sorted array.

---

#### **Code Implementation in JavaScript**
```javascript
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: arrays of length 0 or 1 are already sorted
    }

    const pivot = arr[arr.length - 1]; // Choosing the last element as pivot
    const left = []; // Subarray for elements smaller than pivot
    const right = []; // Subarray for elements greater than pivot

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort left and right subarrays and concatenate them
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
let numbers = [10, 7, 8, 9, 1, 5];
console.log("Sorted Array:", quickSort(numbers));
```

---

#### **Key Observations**
1. **Best Case**:  
   - Complexity: `O(n log n)`  
   - Explanation: Dividing the array into two equal halves at every step ensures logarithmic depth.

2. **Worst Case**:  
   - Complexity: `O(n^2)` (occurs when the pivot divides the array very unevenly, such as always choosing the smallest or largest element as the pivot).  

3. **Space Complexity**:  
   - `O(log n)` for recursive calls (in-place sorting can further optimize memory usage).  

---

#### **Sample Workouts**
1. **Sort Numbers**:  
   Use Quick Sort to sort `[5, 3, 8, 6, 2]` in ascending order.

2. **Sort Strings Alphabetically**:  
   Use Quick Sort to sort an array of strings like `["cat", "dog", "apple", "bat"]`.

3. **Sort by Custom Rule**:  
   Sort an array based on the absolute difference from a number (e.g., sort `[10, 2, 5, 3]` by how close elements are to `5`).

---

#### **Advantages**
- Fast for large datasets.
- Efficient for average-case scenarios due to logarithmic depth.
- In-place sorting is possible, minimizing space usage.

#### **Disadvantages**
- Worst-case performance is poor when the pivot is poorly chosen.
- Recursive implementation can lead to stack overflow for very large arrays.

Would you like to explore in-place Quick Sort or hybrid approaches for optimization?**

Selection Sort is a simple comparison-based sorting algorithm. It divides the array into two parts: a sorted portion and an unsorted portion. The algorithm repeatedly selects the smallest element from the unsorted portion and places it at the end of the sorted portion.

---

#### **How It Works**
1. Start with the first element of the array.
2. Find the smallest element in the entire array and swap it with the first element.
3. Move to the second element and find the smallest element in the unsorted portion.
4. Swap the smallest element with the current element.
5. Repeat this process for all elements until the array is sorted.

---

#### **Real-Life Analogy**
Imagine arranging books in a row by height:
- You scan the entire row to find the shortest book.
- Swap it with the first book.
- Move to the next position and repeat the process with the remaining books.

---

#### **Algorithm**
1. Loop through the array from the first to the second-to-last element.
2. For each iteration, assume the current index is the smallest (`minIndex`).
3. Compare all subsequent elements to find the actual smallest element.
4. Swap the smallest element with the element at `minIndex`.
5. Repeat until the array is sorted.

---

#### **Code Implementation in JavaScript**
```javascript
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the first element of the unsorted portion is the smallest
        let minIndex = i;

        // Find the smallest element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found smallest element with the first element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Example usage:
let numbers = [64, 25, 12, 22, 11];
console.log("Sorted Array:", selectionSort(numbers));
```

---

#### **Key Observations**
1. **Best Case**:  
   - Complexity: `O(n^2)` (Selection Sort always performs the same number of comparisons).  
   - Explanation: Even if the array is already sorted, it will still scan the unsorted portion for the smallest element.  

2. **Worst Case**:  
   - Complexity: `O(n^2)` (maximum number of comparisons and swaps).  
   - Explanation: For each element, all remaining elements are compared.  

3. **Space Complexity**:  
   - `O(1)` (in-place sorting, no extra memory required).  

---

#### **Sample Workouts**
1. **Sort Numbers**:  
   Use Selection Sort to sort `[8, 3, 7, 1, 4]` in ascending order.  

2. **Sort Strings by Length**:  
   Modify Selection Sort to arrange an array of strings by their lengths (e.g., `["apple", "kiwi", "banana"]`).  

3. **Find the Kth Smallest Element**:  
   Use Selection Sort to find the `k`th smallest element in an array without fully sorting it.  

---

#### **Advantages**
- Easy to understand and implement.
- Useful for small datasets where simplicity is prioritized.  

#### **Disadvantages**
- Inefficient for large datasets due to quadratic time complexity.
- Performs unnecessary comparisons even if the array is partially sorted.

<!------------------------------------------------------------------------------------------------------------------------->

### **Merge Sort in Detail**

Merge Sort is a divide-and-conquer sorting algorithm. It works by dividing the array into smaller subarrays until each subarray has one element, then merging the subarrays in a sorted manner to produce the final sorted array.

---

#### **How It Works**
1. **Divide**: Split the array into two halves recursively until each half contains a single element.
2. **Conquer**: Merge each pair of subarrays in sorted order.
3. Repeat the merging process until all subarrays are combined into a single sorted array.

---

#### **Real-Life Analogy**
Imagine organizing two piles of cards that are already sorted. You repeatedly pick the smallest card from the top of both piles and create a new sorted pile.

---

#### **Algorithm**
1. Recursively divide the array into two halves until each subarray has one element.
2. Merge the subarrays:
   - Compare the smallest elements of each subarray.
   - Place the smaller element into the new array.
   - Repeat until all elements are merged.

---

#### **Code Implementation in JavaScript**
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: arrays of length 0 or 1 are already sorted
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
    const right = mergeSort(arr.slice(mid)); // Recursively sort the right half

    return merge(left, right); // Merge the sorted halves
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and add the smallest one
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from the left and right arrays
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
let numbers = [12, 11, 13, 5, 6, 7];
console.log("Sorted Array:", mergeSort(numbers));
```

---

#### **Key Observations**
1. **Best Case**:  
   - Complexity: `O(n log n)`  
   - Explanation: Dividing the array takes `log n` steps, and merging takes `O(n)` at each step.

2. **Worst Case**:  
   - Complexity: `O(n log n)`  
   - Explanation: Performance is consistent regardless of the initial order of elements.

3. **Space Complexity**:  
   - `O(n)` (requires additional memory for temporary arrays used during merging).  

---

#### **Sample Workouts**
1. **Sort Numbers**:  
   Use Merge Sort to sort `[10, 3, 15, 7, 8, 23]` in ascending order.

2. **Merge Two Sorted Arrays**:  
   Write a function to merge `[1, 4, 7]` and `[2, 5, 8]` into a single sorted array.

3. **Find Median Using Merge Sort**:  
   Use Merge Sort to find the median of an array like `[7, 3, 1, 9, 5]`.

---

#### **Advantages**
- Guarantees `O(n log n)` performance in all cases.
- Stable sort: maintains the relative order of equal elements.
- Well-suited for linked list sorting due to its merging process.

#### **Disadvantages**
- Requires additional memory for merging, making it less space-efficient than in-place sorting algorithms like Quick Sort.
- Slower for small datasets compared to simpler algorithms like Insertion Sort.


<!------------------------------------------------------------------------------------------------------------------------->
Here are **10 practical questions** for each sorting algorithm to help you understand and practice their concepts.

---

### **Bubble Sort Questions**
1. **Sort an Array of Integers**  
   Sort the array `[64, 34, 25, 12, 22, 11, 90]` using Bubble Sort.

2. **Count Swaps**  
   Modify Bubble Sort to count the number of swaps required to sort the array.

3. **Check Early Termination**  
   Implement an optimized Bubble Sort that terminates early if the array is already sorted.

4. **Sort Strings**  
   Use Bubble Sort to sort an array of strings alphabetically, e.g., `["banana", "apple", "cherry"]`.

5. **Descending Order**  
   Modify Bubble Sort to sort an array in descending order.

6. **Sort by Length**  
   Sort an array of strings by their lengths, e.g., `["dog", "elephant", "cat"]`.

7. **Largest k Elements**  
   Use Bubble Sort to find the top `k` largest elements in an array.

8. **Find the Median**  
   Sort the array using Bubble Sort and find the median element.

9. **Sort an Array of Objects**  
   Sort an array of objects by a specific property, e.g., `{name: "John", age: 25}` by `age`.

10. **Compare Execution Time**  
    Measure the execution time of Bubble Sort for large datasets and compare it with other sorting algorithms.

---

### **Insertion Sort Questions**
1. **Sort an Array of Integers**  
   Sort the array `[12, 11, 13, 5, 6]` using Insertion Sort.

2. **Insertion Sort for Strings**  
   Sort an array of strings alphabetically using Insertion Sort.

3. **Descending Order**  
   Modify Insertion Sort to sort an array in descending order.

4. **Find the k Smallest Elements**  
   Use Insertion Sort to find the smallest `k` elements in an array.

5. **Insertion in a Sorted Array**  
   Insert an element into its correct position in an already sorted array.

6. **Sort Partially Sorted Data**  
   Sort an array where the elements are mostly sorted except for a few outliers.

7. **Reverse Order**  
   Use Insertion Sort to arrange numbers in reverse order.

8. **Sort a Subarray**  
   Apply Insertion Sort only to a specific portion of the array.

9. **Handle Duplicates**  
   Implement Insertion Sort to handle an array with duplicate elements.

10. **Analyze Time Complexity**  
    Experiment with datasets of different sizes and observe how Insertion Sort behaves.

---

### **Selection Sort Questions**
1. **Sort an Array of Integers**  
   Sort the array `[29, 10, 14, 37, 13]` using Selection Sort.

2. **Track Minimum Element Index**  
   During the sorting process, print the index of the minimum element at each step.

3. **Find the Largest Element**  
   Modify Selection Sort to find the largest element in the array without sorting it completely.

4. **Sort Strings Alphabetically**  
   Sort an array of strings like `["grape", "apple", "mango"]`.

5. **Sort Strings by Length**  
   Sort an array of strings by their lengths.

6. **Selection Sort in Descending Order**  
   Modify the algorithm to sort the array in descending order.

7. **Find the k Largest Elements**  
   Use Selection Sort to find the top `k` largest elements.

8. **Track Swap Operations**  
   Count the number of swaps required to sort the array.

9. **Sort Object Properties**  
   Sort an array of objects by a numeric property, e.g., `[{id: 1}, {id: 3}, {id: 2}]`.

10. **Visualize the Algorithm**  
    Write a program to visualize the steps of Selection Sort.

---

### **Quick Sort Questions**
1. **Sort an Array of Integers**  
   Sort the array `[10, 7, 8, 9, 1, 5]` using Quick Sort.

2. **Partitioning Logic**  
   Implement only the partitioning logic of Quick Sort and print the partitions.

3. **Different Pivot Choices**  
   Experiment with choosing the first, last, and middle element as the pivot.

4. **Sort Strings**  
   Use Quick Sort to sort strings alphabetically, e.g., `["apple", "orange", "banana"]`.

5. **Sort in Descending Order**  
   Modify Quick Sort to sort an array in descending order.

6. **Find the k Smallest Element**  
   Use Quick Sort to find the `k`th smallest element in an array.

7. **Count Recursive Calls**  
   Count the number of recursive calls made by the Quick Sort algorithm.

8. **Sort Floats**  
   Sort an array of floating-point numbers like `[3.1, 1.4, 5.9, 2.6]`.

9. **Sort Object Properties**  
   Sort an array of objects by a string property, e.g., `[{name: "Zara"}, {name: "Anna"}]`.

10. **Compare Execution Time**  
    Compare Quick Sort's performance with Bubble Sort on large datasets.

---

### **Merge Sort Questions**
1. **Sort an Array of Integers**  
   Sort the array `[12, 11, 13, 5, 6, 7]` using Merge Sort.

2. **Merge Two Sorted Arrays**  
   Merge `[1, 4, 7]` and `[2, 5, 8]` into a single sorted array.

3. **Count Merges**  
   Count the number of merge operations required to sort an array.

4. **Sort Strings Alphabetically**  
   Use Merge Sort to sort an array of strings like `["pear", "apple", "orange"]`.

5. **Descending Order**  
   Modify Merge Sort to sort the array in descending order.

6. **Sort Large Data**  
   Use Merge Sort to handle sorting for a dataset with over 1,000,000 entries.

7. **Find the Median**  
   Use Merge Sort to find the median of an array.

8. **Sort by Custom Rule**  
   Sort an array of objects by a custom rule, e.g., sort by the sum of digits in a number.

9. **Visualize Merge Steps**  
   Write a program to visualize how subarrays are merged in each step.

10. **Analyze Time Complexity**  
    Experiment with different sizes of datasets and observe Merge Sort's performance.

---

<!------------------------------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------------------->

### **2. Stacks and Queues in Detail**

Stacks and Queues are fundamental **linear data structures** with distinct methods of insertion and removal. Both are widely used in algorithms, applications, and system operations.

---

### **2.1 Stack**
A **Stack** follows the **LIFO (Last In, First Out)** principle: the last element added is the first to be removed.  

#### **Real-Life Example**
Imagine a stack of plates:  
- You add (PUSH) plates on top of the stack.  
- You remove (POP) plates from the top of the stack.

#### **Basic Operations**
1. **PUSH**: Add an element to the top of the stack.  
2. **POP**: Remove the top element from the stack.  
3. **PEEK/Top**: View the top element without removing it.  
4. **isEmpty**: Check if the stack is empty.

#### **JavaScript Implementation**
```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow"; // No elements to remove
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items);
    }
}

// Example usage:
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log("Top element:", stack.peek());
stack.pop();
stack.display();
```

---

### **2.2 Queue**
A **Queue** follows the **FIFO (First In, First Out)** principle: the first element added is the first to be removed.

#### **Real-Life Example**
Think of people standing in a queue at a ticket counter:  
- The first person (ENQUEUE) is the first to get the ticket and leave (DEQUEUE).

#### **Basic Operations**
1. **ENQUEUE**: Add an element to the end of the queue.  
2. **DEQUEUE**: Remove an element from the front of the queue.  
3. **isEmpty**: Check if the queue is empty.  
4. **FRONT**: View the first element without removing it.

#### **JavaScript Implementation**
```javascript
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"; // No elements to remove
        }
        return this.items.shift(); // Removes the front element
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items);
    }
}

// Example usage:
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log("Front element:", queue.front());
queue.dequeue();
queue.display();
```

---

### **Differences Between Stack and Queue**
| Feature          | Stack                    | Queue                    |
|-------------------|--------------------------|--------------------------|
| Principle         | LIFO                    | FIFO                    |
| Operations        | PUSH, POP               | ENQUEUE, DEQUEUE        |
| Use Cases         | Undo functionality, Parsing | Process scheduling, Breadth-First Search |

---

### **Applications of Stack**
1. **Undo Functionality**: Keep track of user actions to undo them in reverse order.  
2. **Parenthesis Matching**: Check if an expression has balanced parentheses.  
3. **Expression Evaluation**: Convert infix to postfix and evaluate postfix expressions.  
4. **Backtracking**: Solve maze problems using stack.  
5. **Function Call Management**: Manage recursive function calls in the program stack.

---

### **Applications of Queue**
1. **Process Scheduling**: Manage tasks in operating systems.  
2. **Breadth-First Search (BFS)**: Traverse graphs level by level.  
3. **Print Job Management**: Queue up documents for a printer.  
4. **Order Processing**: Handle real-time systems like ticket queues.  
5. **Data Buffers**: Temporary storage for transferring data, e.g., keyboard buffers.

---

### **Practical Questions**
#### **Stack Questions**
1. Implement a stack to reverse a string.  
2. Evaluate a postfix expression using a stack.  
3. Use a stack to check if an expression has balanced parentheses.  
4. Design a stack that supports getting the minimum element in `O(1)` time.  
5. Implement two stacks in a single array.  
6. Use a stack to convert infix expressions to postfix.  
7. Solve a Tower of Hanoi problem with a stack.  
8. Reverse a linked list using a stack.  
9. Find the next greater element for each array element using a stack.  
10. Check for redundant parentheses in a mathematical expression.

#### **Queue Questions**
1. Implement a circular queue using an array.  
2. Use a queue to simulate a ticket counter.  
3. Implement a priority queue (min-heap).  
4. Find the first non-repeating character in a stream of characters.  
5. Implement a queue using two stacks.  
6. Use a queue to perform level-order traversal of a binary tree.  
7. Simulate a real-time task scheduling system using a queue.  
8. Reverse a queue using recursion.  
9. Find the first negative integer in every window of size `k` in an array.  
10. Design a data structure using a queue that supports the "stack" operations.

---
<!------------------------------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------------------->

### **3. Hash Tables in Detail**

A **Hash Table** is a data structure that maps **keys** to **values** using a hashing function. It allows for efficient **insertion**, **deletion**, and **lookup** operations, typically in **O(1)** time on average.

---

### **Key Concepts**

1. **Hash Function**  
   A function that converts a key into a numerical index (hash code). This index is used to store the key-value pair in the hash table.  
   Example:  
   - Key: `"John"`
   - Hash Function: `sum(ascii(characters)) % tableSize`  
   - Resulting Index: 5  

2. **Collision Handling**  
   When two keys generate the same hash code, this is called a **collision**. There are two primary ways to handle collisions:
   - **Chaining**: Store multiple key-value pairs at the same index using a linked list or an array.  
   - **Open Addressing**: Probe the table for the next available slot (e.g., linear probing, quadratic probing, or double hashing).

3. **Load Factor**  
   The ratio of the number of elements to the size of the table.  
   - A higher load factor increases the likelihood of collisions.  
   - Hash tables often resize dynamically to maintain a low load factor (e.g., below 0.7).

---

### **Real-Life Example**

Think of a **phonebook**:
- **Key**: Person's name  
- **Value**: Person's phone number  
- A hash function maps the person's name to a specific page or index in the phonebook.

---

### **Hash Table Operations**
1. **Insert (Put)**: Add a key-value pair.
2. **Retrieve (Get)**: Find the value associated with a key.
3. **Delete**: Remove a key-value pair.
4. **Contains**: Check if a key exists.

---

### **JavaScript Implementation**
JavaScript provides **Map** and **Object** for hash table-like behavior, but we can also implement one manually.

```javascript
class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
    }

    hash(key) {
        let hashValue = 0;
        for (let char of key) {
            hashValue += char.charCodeAt(0);
        }
        return hashValue % this.table.length;
    }

    put(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        // Check if the key already exists, update value
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        // If key does not exist, add it
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let pair of this.table[index]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined;
    }

    delete(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            this.table[index] = this.table[index].filter(pair => pair[0] !== key);
        }
    }

    display() {
        this.table.forEach((entries, index) => {
            if (entries) {
                console.log(`Index ${index}:`, entries);
            }
        });
    }
}

// Example usage
const hashTable = new HashTable();
hashTable.put("John", 123);
hashTable.put("Jane", 456);
console.log("John's number:", hashTable.get("John"));
hashTable.delete("John");
hashTable.display();
```

---

### **Applications of Hash Tables**
1. **Caching**: Store precomputed data for quick access (e.g., web page caching).
2. **Databases**: Use hash indexes for fast lookups.
3. **Symbol Tables**: Compiler design uses hash tables for variable and function name lookups.
4. **Counting Frequencies**: Count occurrences of elements in arrays or strings.
5. **Unique Items**: Check for duplicates in datasets efficiently.

---

### **Practical Questions**
1. **Implement a Hash Table**  
   Write a custom hash table implementation from scratch.

2. **Count Word Frequencies**  
   Count the frequency of each word in a string using a hash table.

3. **Check for Anagrams**  
   Use a hash table to determine if two strings are anagrams.

4. **Find First Non-Repeating Character**  
   Use a hash table to find the first non-repeating character in a string.

5. **Check for Duplicates in an Array**  
   Use a hash table to determine if an array contains duplicate elements.

6. **Group Elements by Frequency**  
   Group array elements by their frequency using a hash table.

7. **Implement a Phonebook**  
   Store and retrieve contact details using a hash table.

8. **Two-Sum Problem**  
   Given an array and a target, find two numbers that add up to the target using a hash table.

9. **Intersection of Two Arrays**  
   Find the intersection of two arrays using hash tables.

10. **Cache System**  
    Implement a simple cache system using a hash table.

---

<!------------------------------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------------------->

### **4. Applications of Data Structures and Algorithms**

The true value of data structures and algorithms lies in their practical applications. Let’s dive into the real-world uses of sorting algorithms, stacks, queues, and hash tables, followed by actionable tasks to deepen understanding.

---

### **4.1 Applications of Sorting Algorithms**

Sorting is fundamental in organizing data for better readability, efficiency, and accessibility.  
#### **Practical Examples**
1. **User Interface**: Sort search results (e.g., by relevance or date).  
2. **E-commerce**: Sort products by price, popularity, or rating.  
3. **Financial Systems**: Sort transactions by time, amount, or account number.  
4. **Gaming**: Leaderboards sorted by score or ranking.  
5. **Data Visualization**: Organize datasets for better chart plotting or analytics.

#### **Competitive Coding Challenges**
1. Sort a list of strings based on their lengths.  
2. Sort an array containing both positive and negative numbers, with negatives first.  
3. Find the `k`-th smallest element in an unsorted array.  
4. Merge two sorted arrays without using extra space.  
5. Count the number of inversions in an array using merge sort.  

---

### **4.2 Applications of Stacks**

Stacks are ideal for scenarios where the **last action must be the first to undo** or process.  

#### **Practical Examples**
1. **Undo/Redo Functionality**: Text editors or IDEs.  
2. **Expression Evaluation**: Convert and evaluate mathematical expressions.  
3. **Backtracking**: Solve maze problems or puzzles (e.g., N-Queens).  
4. **Function Call Management**: Recursive function calls are managed using a stack.  
5. **Browser History**: Navigating back and forth between web pages.  

#### **Competitive Coding Challenges**
1. Check if an expression has balanced parentheses.  
2. Convert an infix expression to postfix notation.  
3. Design a stack that supports retrieving the minimum value in constant time.  
4. Evaluate a postfix expression using stacks.  
5. Implement a stack using two queues.  

---

### **4.3 Applications of Queues**

Queues are essential in systems where **tasks are processed in the order of arrival**.

#### **Practical Examples**
1. **Process Scheduling**: Operating systems manage processes using queues (e.g., Round-Robin scheduling).  
2. **Breadth-First Search (BFS)**: Traversing graphs or solving shortest path problems.  
3. **Real-Time Systems**: Handling customer support tickets or simulations (e.g., airport check-in systems).  
4. **Data Streams**: Monitor real-time events like stock price feeds.  
5. **Printing Systems**: Manage a print job queue for orderly processing.  

#### **Competitive Coding Challenges**
1. Implement a circular queue.  
2. Reverse a queue using recursion.  
3. Design a queue to handle customer service tickets based on priority.  
4. Use a queue to perform BFS on a binary tree.  
5. Simulate a real-time scheduling system where tasks have deadlines.  

---

### **4.4 Applications of Hash Tables**

Hash tables are invaluable for fast **lookups, indexing, and frequency counting**.

#### **Practical Examples**
1. **Database Indexing**: Speed up search queries with hash-based indexes.  
2. **Web Caching**: Store precomputed results (e.g., DNS lookup caching).  
3. **Counting Frequencies**: Analyze text data (e.g., word count in a document).  
4. **Unique Element Storage**: Store non-repeating elements (e.g., unique email addresses).  
5. **Implementing Sets/Maps**: Efficiently implement data structures like `Set` or `Map`.  

#### **Competitive Coding Challenges**
1. Find the first non-repeating character in a string.  
2. Detect duplicates in an array in O(n) time.  
3. Solve the two-sum problem using hash tables.  
4. Group anagrams in an array of strings.  
5. Implement a phonebook application using a hash table.  

---

### **Plan for Applications**

To master these concepts, apply them in competitive coding challenges. Here's a step-by-step plan:

1. **Select a Platform**: Use HackerRank, CodeChef, LeetCode, or AlgoExpert.  
2. **Set Goals**: Solve at least 3 problems for each data structure or algorithm.  
3. **Mix Difficulty Levels**: Start with easy, move to medium, and finally tackle hard problems.  
4. **Analyze Solutions**: After solving a problem, compare your solution with others to optimize.  
