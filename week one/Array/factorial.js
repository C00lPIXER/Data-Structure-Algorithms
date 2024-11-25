function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

// with recursion

function recursionFactorial(n) {
  if (n === 0) return 1;
  return n * recursionFactorial(n - 1);
}

console.log(recursionFactorial(5));
