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
  // 使用中序遍歷得到節點值的升序序列
  const values = [];
  inorderTraversal(root, values);

  // 檢查序列是否為升序
  for (let i = 1; i < values.length; i++) {
    if (values[i] <= values[i - 1]) {
      return false;
    }
  }

  return true;
};

function inorderTraversal(node, values) {
  if (!node) {
    return;
  }

  inorderTraversal(node.left, values);
  values.push(node.val);
  inorderTraversal(node.right, values);
}
