const assert = require('assert');

const fibonacci = require('./fibonacci');

describe('fibonacci', function () {
  it('has the correct base case (1)', function () {
    const result = fibonacci(0n);
    assert.strictEqual(result, 0n);
  });
  it('has the correct base case (2)', function () {
    const result = fibonacci(1n);
    assert.strictEqual(result, 1n);
  });
  it('correctly recurses', function () {
    const result = fibonacci(3n);
    assert.strictEqual(result, 2n);
  });
});