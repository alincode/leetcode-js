const assert = require("assert");

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(Infinity));
  // Initialize all positions that contain a zero
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        dp[i][j] = 0;
      }
    }
  }
  // Traverse the dp array from top-left to bottom-right
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
      }
      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
      }
    }
  }
  // Traverse the dp array from bottom-right to top-left
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (i < rows - 1) {
        dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
      }
      if (j < cols - 1) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
      }
    }
  }
  return dp;
};

assert.deepEqual(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
  [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]
);

assert.deepEqual(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]),
  [
    [0, 0, 0],
    [0, 1, 0],
    [1, 2, 1],
  ]
);

assert.deepEqual(
  updateMatrix([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 0],
  ]),
  [
    [4, 3, 2],
    [3, 2, 1],
    [2, 1, 0],
  ]
);

assert.deepEqual(
  updateMatrix([
    [1, 1, 1],
    [1, 1, 0],
    [0, 0, 1],
  ]),
  [
    [2, 2, 1],
    [1, 1, 0],
    [0, 0, 1],
  ]
);
