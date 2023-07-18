const assert = require("assert");

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  if (n === 0) return 0;
  return (n & 1) + hammingWeight(n >>> 1);
};

// 時間複雜度是 O(log n)
// 空間複雜度是 O(log n)

assert.equal(hammingWeight(5), 2);
assert.equal(hammingWeight(10), 2);
assert.equal(hammingWeight(11), 3);
assert.equal(hammingWeight(128), 1);
assert.equal(hammingWeight(4294967293), 31);
