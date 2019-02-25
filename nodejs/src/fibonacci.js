function fibonacci (n) {
  if (n > 1n) {
    return fibonacci(n - 1n) + fibonacci(n - 2n);
  }
  return n === 0n ? 0n : 1n;
}

// function fibonacci (n) {
//   if (n > 1n) {
//     return fibonacci(n - 1n) + fibonacci(n - 2n);
//   }
//   return n === 0n ? 0n : 1n;
// }

module.exports = fibonacci;