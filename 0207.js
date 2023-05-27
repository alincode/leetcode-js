const assert = require("assert");

const buildGraph = (numCourses, prerequisites) => {
  const graph = Array.from({ length: numCourses }, () => []);
  for (let prereq of prerequisites) {
    graph[prereq[0]].push(prereq[1]);
  }

  return graph;
};

// DFS
const hasCycle = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);

  for (const neighbor of graph[node]) {
    if (hasCycle(graph, neighbor, visiting, visited)) return true;
  }

  visiting.delete(node);
  visited.add(node);
  return false;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites);
  let visiting = new Set();
  let visited = new Set();
  for (let node in graph) {
    if (hasCycle(graph, node, visiting, visited)) return false;
  }
  return true;
};

// assert.equal(canFinish(2, [[1, 0]]), true);
// assert.equal(canFinish(2, [[0, 1]]), true);
// assert.equal(
//   canFinish(2, [
//     [1, 0],
//     [0, 1],
//   ]),
//   false
// );

// assert.equal(
//   canFinish(5, [
//     [0, 1],
//     [0, 2],
//     [1, 3],
//     [1, 4],
//     [3, 4],
//   ]),
//   true
// );

assert.equal(
  canFinish(4, [
    [2, 0],
    [1, 0],
    [3, 1],
    [3, 2],
    [1, 3],
  ]),
  false
);
