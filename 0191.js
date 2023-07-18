const assert = require("assert");

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    if (n & 1) count++;
    n = n >>> 1;
  }
  return count;
};

// 時間複雜度是 O(1)
// 空間複雜度是 O(1)

assert.equal(hammingWeight(5), 2);
assert.equal(hammingWeight(10), 2);
assert.equal(hammingWeight(11), 3);
assert.equal(hammingWeight(128), 1);
assert.equal(hammingWeight(4294967293), 31);
