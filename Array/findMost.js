let array = [
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 0],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
];

let obj = {};
for (let i = 0; i < array.length; i++) {
  let count = 0;
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] === 1) {
      count++;
    }
    obj[i] = count;
  }
}

let max = 0;
let row;
for (key in obj) {
  if (obj[key] > max) {
    max = obj[key];
    row = key;
  }
}

console.log(key, max);
