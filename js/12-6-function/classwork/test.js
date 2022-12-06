let num = 5;

function factorial(a) {
  if (a <= 1) {
    return 1;
  } else {
    let result = a * (a - 1);
    return result;
  }
}

console.log(factorial(num));
