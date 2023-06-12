const assert = require("assert");
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const visited = Array.from(Array(m), () => Array(n).fill(false));

  const dfs = function (row, col, index) {
    // 判斷邊界條件和字母匹配情況
    if (
      row < 0 ||
      row >= m ||
      col < 0 ||
      col >= n ||
      visited[row][col] ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    // 已經找到了完整的單詞
    if (index === word.length - 1) {
      return true;
    }

    // 標記當前位置已訪問
    visited[row][col] = true;

    // 遞歸搜索上下左右四個方向
    const found =
      dfs(row - 1, col, index + 1) ||
      dfs(row + 1, col, index + 1) ||
      dfs(row, col - 1, index + 1) ||
      dfs(row, col + 1, index + 1);

    // 回溯，標記當前位置為未訪問
    visited[row][col] = false;

    return found;
  };

  // 遍歷矩陣的每個位置，進行搜索
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
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
    "ABCCED"
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
