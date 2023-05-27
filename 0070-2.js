const assert = require("assert");
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;

  let count = [1, 2];

  for (let i = 2; i < n; i++) {
    count[i] = count[i - 2] + count[i - 1];
  }
  return count[n - 1];
};

// Time: O(n)
// Space: O(n)

assert.equal(climbStairs(1), 1);
assert.equal(climbStairs(2), 2);
assert.equal(climbStairs(3), 3);
assert.equal(climbStairs(4), 5);
assert.equal(climbStairs(5), 8);
