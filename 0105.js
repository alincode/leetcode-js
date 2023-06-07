/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;

  // 前序遍歷的第一個元素是根節點
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  // 在中序遍歷序列中找到根節點的位置
  const rootIndex = inorder.indexOf(rootVal);

  // 分割中序遍歷序列為左子樹和右子樹的部分
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  // 分割前序遍歷序列為根節點、左子樹和右子樹的部分
  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  const rightPreorder = preorder.slice(1 + leftInorder.length);

  // 遞迴構建左子樹和右子樹
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};
