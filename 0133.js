/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const visited = {};

  const dfs = (node) => {
    if (!node) return;
    if (visited[node.val]) return visited[node.val];

    const clone = new Node(node.val);
    visited[node.val] = clone;

    clone.neighbors = node.neighbors.map(dfs);

    return clone;
  };

  return dfs(node);
};

// DFS
