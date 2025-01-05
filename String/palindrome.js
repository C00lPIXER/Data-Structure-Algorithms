/**
 * Write a function to check if a string is a palindrome.
 */

function palindrome(str) {
  return str.length <= 1 ? false : str == str.split("").reverse().join("");
}

console.log(palindrome("ss"));
