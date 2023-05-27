const assert = require("assert");

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const queue = [];
  const visited = Array.from({ length: m }, () => new Array(n).fill(false));
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  // 將所有值為 0 的元素加入隊列中，並標記為已訪問
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        visited[i][j] = true;
      }
    }
  }
  // 從每個值為 0 的元素開始進行 BFS
  while (queue.length > 0) {
    const [i, j] = queue.shift();
    // 檢查四周的元素是否需要更新距離值
    for (const [dx, dy] of directions) {
      const x = i + dx;
      const y = j + dy;
      if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y]) {
        mat[x][y] = mat[i][j] + 1;
        queue.push([x, y]);
        visited[x][y] = true;
      }
    }
  }
  return mat;
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
