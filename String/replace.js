/**
 * Replace every occurrence of a given word in a string with another word.
 */

function replace(str, oldWord, newWord) {
  return str.replace(oldWord, newWord);
}

let str = "Hello World!";

console.log(replace(str, "Hello", "Hi"));
