function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num-1) + fibonacci(num-2);
}

function fibonacciMemo(num, memo = []) {
  if (memo[num] !== undefined) return memo[num];
  if (num <= 2) return 1;
  const result = fibonacciMemo(num-1, memo) + fibonacciMemo(n-2, memo);
  memo[num] = result;
  return result;
}



console.log(fibonacci(20));


