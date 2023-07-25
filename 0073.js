const assert = require("assert");

var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let firstRowZero = false;
  let firstColZero = false;

  // Step 1: Check if first row and first column have zeros
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // Step 2: Mark zeros on first row and first column
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Step 3: Set zeros based on marks on first row and first column
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Step 4: Set first row and first column zeros if needed
  if (firstRowZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstColZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
};

// 時間複雜度：O(m * n)
// 空間複雜度：O(1)

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
