/**
 * Check if an array is a palindrome.
 */

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 1];
let arr3 = [2, 1];
let arr4 = [1];

function isPalindrome(array) {
  let x = array.join("");
  let y = array.reverse().join("");

  if (x === y) return true;

  return false;
}

console.log(isPalindrome(arr1));
console.log(isPalindrome(arr2));
console.log(isPalindrome(arr3));
console.log(isPalindrome(arr4));
