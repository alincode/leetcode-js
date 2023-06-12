const assert = require("assert");
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const bfs = (i, j, index) => {
    if (index === word.length) {
      return true;
    }

    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
      return false;
    }

    const temp = board[i][j];
    board[i][j] = "#"; // Mark the cell as visited

    for (const [dx, dy] of directions) {
      if (bfs(i + dx, j + dy, index + 1)) {
        return true;
      }
    }

    board[i][j] = temp; // Restore the cell value
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (bfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

assert.equal(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  ),
  true
);

assert.equal(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  ),
  false
);
