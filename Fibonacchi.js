// basic solution
function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num-1) + fibonacci(num-2);
}

// Memoized solution
function fibonacciMemo(num, memo = []) {
  if (memo[num] !== undefined) return memo[num];
  if (num <= 2) return 1;
  const result = fibonacciMemo(num-1, memo) + fibonacciMemo(num-2, memo);
  memo[num] = result;
  return result;
}

// Tabulated solution
function fibTab(n) {
  if (n <= 2) return 1;
  let fibNums = [0,1,1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n];
}

// console.log(fibonacci(20));

console.log(fibonacciMemo(20));


