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

  const dfs = (r, c, visited) => {
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
        dfs(nr, nc, visited);
      }
    }
  };

  const pacificVisited = Array.from({ length: m }, () => Array(n).fill(false));
  const atlanticVisited = Array.from({ length: m }, () => Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacificVisited);
    dfs(i, n - 1, atlanticVisited);
  }

  for (let j = 0; j < n; j++) {
    dfs(0, j, pacificVisited);
    dfs(m - 1, j, atlanticVisited);
  }

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
