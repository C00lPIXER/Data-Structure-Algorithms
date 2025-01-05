/**
 * Count the frequency of each character in a string.
 */

function frequency(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  return obj;
}

console.log(frequency("mamaiuhadfuhfohdfiugofsugbeoaug"));