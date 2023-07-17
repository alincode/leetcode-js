const assert = require("assert");
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      let top = left;
      let bottom = right;

      let topLeft = matrix[top][left + i];
      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = topLeft;
    }
    right--;
    left++;
  }
  return matrix;
};

assert.deepEqual(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]
);

assert.deepEqual(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ]),
  [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ]
);
