function fibonacci(n) {
  let array = [0, 1];

  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }

  return array;
}

console.log(fibonacci(7));

// with recursion

function recursionFibnocci(n) {
  if (n < 2) return n;
  return recursionFibnocci(n - 1) + recursionFibnocci(n - 2);
}

console.log(recursionFibnocci(1))