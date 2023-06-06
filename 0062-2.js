const assert = require("assert");

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 計算組合數 C(m+n-2, m-1)
  const totalSteps = m + n - 2;
  const downSteps = m - 1;
  let result = 1;

  for (let i = 1; i <= downSteps; i++) {
    result = (result * (totalSteps - downSteps + i)) / i;
  }

  return Math.round(result);
};

assert.equal(uniquePaths(3, 7), 28);
assert.equal(uniquePaths(3, 2), 3);
