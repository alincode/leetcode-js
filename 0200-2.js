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

  // 定義BFS函數
  const bfs = function (i, j) {
    // 定義方向，上、下、左、右
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    // 創建隊列，用於存儲待訪問的節點座標
    const queue = [];
    queue.push([i, j]);

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      // 檢查座標是否越界或當前位置不是陸地
      if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] !== "1") {
        continue;
      }

      // 將當前位置標記為已訪問
      grid[x][y] = "0";

      // 將相鄰的陸地加入隊列
      for (const [dx, dy] of directions) {
        queue.push([x + dx, y + dy]);
      }
    }
  };

  // 遍歷整個網格，當遇到陸地時進行BFS訪問並增加島嶼計數
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        bfs(i, j);
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
