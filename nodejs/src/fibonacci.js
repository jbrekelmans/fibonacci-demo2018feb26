function fibonacci (n) {
  if (n > 1n) {
    return fibonacci(n - 1n) + fibonacci(n - 2n);
  }
  return n === 0n ? 0n : 1n;
}

// function fibonacci (n) {
//   if (n === 0n) {
//     return 0n;
//   }
//   let prev = 0n;
//   let cur = 1n;
//   while (n > 1n) {
//     const next = prev + cur;
//     prev = cur;
//     cur = next;
//     n--;
//   }
//   return cur;
// }

module.exports = fibonacci;