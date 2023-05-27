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
 * @return {boolean}
 */
var isValidBST = function (root) {
  var dfs = function (node, left, right) {
    // 空節點是有效的BST
    if (!node) return true;

    // 檢查當前節點的值是否在[left, right]範圍內
    if (node.val <= left || node.val >= right) {
      return false;
    }

    // 遞迴檢查左子樹和右子樹
    return dfs(node.left, left, node.val) && dfs(node.right, node.val, right);
  };

  return dfs(root, -Infinity, Infinity);
};

// DFS
