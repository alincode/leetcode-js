const assert = require("assert");

var countBits = function (n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[Math.floor(i / 2)] + (i % 2);
  }
  return dp;
};

assert.deepEqual(countBits(2), [0, 1, 1]);
assert.deepEqual(countBits(5), [0, 1, 1, 2, 1, 2]);
