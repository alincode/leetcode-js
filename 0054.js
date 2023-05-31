const assert = require("assert");
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let result = [];
  let topRow = 0;
  let bottomRow = matrix.length - 1;
  let leftCol = 0;
  let rightCol = matrix[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    // Traverse top row
    for (let i = leftCol; i <= rightCol; i++) result.push(matrix[topRow][i]);
    topRow++;

    // Traverse right column
    for (let i = topRow; i <= bottomRow; i++) result.push(matrix[i][rightCol]);
    rightCol--;

    // Check if there are remaining rows and columns
    if (topRow <= bottomRow) {
      // Traverse bottom row
      for (let i = rightCol; i >= leftCol; i--) {
        result.push(matrix[bottomRow][i]);
      }
      bottomRow--;
    }

    if (leftCol <= rightCol) {
      // Traverse left column
      for (let i = bottomRow; i >= topRow; i--) {
        result.push(matrix[i][leftCol]);
      }
      leftCol++;
    }
  }

  return result;
};

// Time:  O(m * n)
// Space:  O(1)

assert.deepEqual(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [1, 2, 3, 6, 9, 8, 7, 4, 5]
);

assert.deepEqual(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
  [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
);
