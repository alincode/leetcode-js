const assert = require("assert");

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const m = grid.length; // 網格的行數
  const n = grid[0].length; // 網格的列數
  let count = 0; // 島嶼的數量

  // 定義DFS函數
  const dfs = function (i, j) {
    // 檢查座標是否越界或當前位置不是陸地
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== "1") {
      return;
    }

    // 將當前位置標記為已訪問
    grid[i][j] = "0";

    // 遞歸訪問相鄰的陸地
    dfs(i - 1, j); // 上
    dfs(i + 1, j); // 下
    dfs(i, j - 1); // 左
    dfs(i, j + 1); // 右
  };

  // 遍歷整個網格，當遇到陸地時進行DFS訪問並增加島嶼計數
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};

assert.equal(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
  1
);

assert.equal(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
  3
);
