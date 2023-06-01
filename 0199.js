/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let lastNodeValue;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      lastNodeValue = node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(lastNodeValue);
  }

  return result;
};

// BFS

// 這個解法的時間複雜度為 O(N)，其中 N 是二叉樹的節點數量。
// 空間複雜度為 O(M)，其中 M 是二叉樹的最大層級數量
