const assert = require("assert");

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 創建二維陣列 dp
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  // 初始化第一行和第一列的值為 1
  for (let i = 0; i < m; i++) dp[i][0] = 1;

  for (let j = 0; j < n; j++) dp[0][j] = 1;

  // 遍歷網格，計算不同位置的路徑數量
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // 返回終點的路徑數量
  return dp[m - 1][n - 1];
};

assert.equal(uniquePaths(3, 7), 28);
assert.equal(uniquePaths(3, 2), 3);
