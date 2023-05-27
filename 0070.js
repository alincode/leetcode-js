const assert = require("assert");
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;

  let a = 1;
  let b = 2;

  for (let i = 3; i <= n; i++) {
    let tmp = a + b;
    a = b;
    b = tmp;
  }
  return b;
};

assert.equal(climbStairs(1), 1);
assert.equal(climbStairs(2), 2);
assert.equal(climbStairs(3), 3);
assert.equal(climbStairs(4), 5);
assert.equal(climbStairs(5), 8);
