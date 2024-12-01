/**
 *
 */

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

const array = [100, 11, 33, 55, 66, 22, 77, 88, 44, 99];
console.log(bubbleSort(array));
