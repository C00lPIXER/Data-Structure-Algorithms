/**
 * Write a function to find the subarray with the maximum sum (Kadane's algorithm).
 */

function maxSubarraySum(arr) {
    let maxSum = -Infinity; 
    let currentSum = 0; 
  
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
  
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
  
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
  
    return maxSum;
  }
  
  const array = [-2, -3, 4, -1, -2, 1, 5, -3];
  console.log(maxSubarraySum(array));
  