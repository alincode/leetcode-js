const assert = require("assert");

var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const zeroRows = new Array(m).fill(false);
  const zeroCols = new Array(n).fill(false);

  // 遍歷矩陣，將需要置為 0 的行和列記錄下來
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }

  // 根據記錄的行和列的位置，將對應的元素置為 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (zeroRows[i] || zeroCols[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};

// 時間複雜度：O(m * n)
// 空間複雜度為 O(m + n)

assert.deepEqual(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
  [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]
);

assert.deepEqual(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]),
  [
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ]
);
