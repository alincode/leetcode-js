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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;
  let tmp = root.right;
  root.right = root.left;
  root.left = tmp;

  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);

  return root;
};

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Input: root = [2,1,3]
// Output: [2,3,1]
