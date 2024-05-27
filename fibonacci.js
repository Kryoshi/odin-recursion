function fibonacci(n) {
  if (n > 0) {
    n = Math.floor(n);
    const fibArr = [];
    let i = 0;
    while (i < n) {
      if (i === 0 || i === 1) {
        fibArr.push(i);
      } else {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
      }
      ++i;
    }
    return fibArr;
  } else return 'Argument must be greater than 0';
}

function fibonacciR(n, fibArr) {
  if (n > 0) {
    let isFirstCall;
    if (fibArr === undefined) {
      fibArr = [0];
      isFirstCall = true;
    }
    let fib;
    if (n === 1) {
      fib = 0;
    } else if (n === 2) {
      fib = 1;
    } else {
      fib = fibonacciR(n - 1, fibArr) + fibonacciR(n - 2, fibArr);
    }
    fibArr[n - 1] = fib;
    if (isFirstCall) {
      return fibArr;
    }
    return fib;
  } else return 'Argument must be greater than 0';
}

const testVar = 10;

console.log(fibonacci(testVar));
console.log(fibonacciR(testVar));
