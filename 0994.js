const assert = require("assert");
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let freshCount = 0;
  const queue = [];

  // 初始化，將腐爛橘子加入佇列，同時統計新鮮橘子的數量
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      if (grid[i][j] === 1) freshCount++;
    }
  }

  // 若新鮮橘子數量為0，表示已經沒有新鮮橘子，則返回0
  if (freshCount === 0) return 0;

  let minutes = 0;

  while (queue.length > 0) {
    const size = queue.length;
    let infected = false;

    // 每一層遍歷
    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift();

      // 遍歷相鄰的四個方向
      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        // 檢查新位置的有效性以及是否為新鮮橘子
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === 1
        ) {
          // 將新鮮橘子變為腐爛狀態，並將其加入佇列
          grid[newRow][newCol] = 2;
          queue.push([newRow, newCol]);
          freshCount--;
          infected = true;
        }
      }
    }

    // 若有橘子被感染，則增加分鐘數
    if (infected) minutes++;
  }

  // 若還有剩餘的新鮮橘子，則表示無法使所有橘子都變為腐爛狀態
  if (freshCount > 0) return -1;

  // 返回所需的分鐘數
  return minutes;
};

assert.equal(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
  4
);

assert.equal(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
  -1
);

assert.equal(orangesRotting([[0, 2]]), 0);
