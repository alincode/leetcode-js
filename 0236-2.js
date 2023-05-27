/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const queue = [root];
  const parentMap = new Map();
  parentMap.set(root, null);

  // 進行 BFS
  while (parentMap.get(p) === undefined || parentMap.get(q) === undefined) {
    const node = queue.shift();

    if (node.left) {
      queue.push(node.left);
      parentMap.set(node.left, node);
    }

    if (node.right) {
      queue.push(node.right);
      parentMap.set(node.right, node);
    }
  }

  // 找到 p 的所有祖先節點
  const ancestors = new Set();
  while (p) {
    ancestors.add(p);
    p = parentMap.get(p);
  }

  // 找到 q 的最近公共祖先
  while (!ancestors.has(q)) {
    q = parentMap.get(q);
  }

  return q;
};
