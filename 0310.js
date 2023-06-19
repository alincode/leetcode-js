const assert = require("assert");

var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  // 初始化鄰接表
  const graph = new Array(n).fill(0).map(() => []); // [ [], [], [], [] ]
  // 初始化度數數組
  const degrees = new Array(n).fill(0); // [ 0, 0, 0, 0 ]

  // 構建鄰接表和度數數組
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
    degrees[u]++;
    degrees[v]++;
  }

  // 初始化隊列
  const queue = [];
  for (let node in degrees) {
    if (degrees[node] === 1) queue.push(node);
  }

  let remainingNodes = n;
  while (remainingNodes > 2) {
    const qlen = queue.length;
    remainingNodes -= qlen;

    for (let i = 0; i < qlen; i++) {
      const node = queue.shift();
      degrees[node]--;

      for (const neighbor of graph[node]) {
        degrees[neighbor]--;
        if (degrees[neighbor] === 1) queue.push(neighbor);
      }
    }
  }

  return queue;
};

assert.deepEqual(
  findMinHeightTrees(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ]),
  [1]
);

assert.deepEqual(
  findMinHeightTrees(6, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ]),
  [3, 4]
);
