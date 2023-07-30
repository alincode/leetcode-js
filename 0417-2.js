const assert = require("assert");

var pacificAtlantic = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const bfs = (queue, visited) => {
    while (queue.length > 0) {
      const [r, c] = queue.shift();
      visited[r][c] = true;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nr < m &&
          nc >= 0 &&
          nc < n &&
          !visited[nr][nc] &&
          heights[nr][nc] >= heights[r][c]
        ) {
          queue.push([nr, nc]);
        }
      }
    }
  };

  const pacificQueue = [];
  const atlanticQueue = [];
  const pacificVisited = Array.from({ length: m }, () => Array(n).fill(false));
  const atlanticVisited = Array.from({ length: m }, () => Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    pacificQueue.push([i, 0]);
    atlanticQueue.push([i, n - 1]);
  }

  for (let j = 0; j < n; j++) {
    pacificQueue.push([0, j]);
    atlanticQueue.push([m - 1, j]);
  }

  bfs(pacificQueue, pacificVisited);
  bfs(atlanticQueue, atlanticVisited);

  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacificVisited[i][j] && atlanticVisited[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

assert.deepEqual(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ]),
  [
    [0, 4],
    [1, 3],
    [1, 4],
    [2, 2],
    [3, 0],
    [3, 1],
    [4, 0],
  ]
);
