const assert = require("assert");

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 計算組合數 C(m+n-2, m-1)
  const n = m + n - 2;
  const k = m - 1;
  return combination(n, k);
};

function combination(n, k) {
  // 計算二項式係數
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result *= (n - i + 1) / i;
  }
  return Math.round(result);
}

assert.equal(uniquePaths(3, 7), 28);
assert.equal(uniquePaths(3, 2), 3);
