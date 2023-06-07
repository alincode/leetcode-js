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
  if (preorder.length === 0) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const stack = [root];
  let inorderIndex = 0;

  for (let i = 1; i < preorder.length; i++) {
    let currentNode = stack[stack.length - 1];

    if (currentNode.val !== inorder[inorderIndex]) {
      // 建立左子樹
      const leftNode = new TreeNode(preorder[i]);
      currentNode.left = leftNode;
      stack.push(leftNode);
    } else {
      // 遇到中序遍歷序列中的根節點，開始建立右子樹
      while (
        stack.length > 0 &&
        stack[stack.length - 1].val === inorder[inorderIndex]
      ) {
        currentNode = stack.pop();
        inorderIndex++;
      }

      const rightNode = new TreeNode(preorder[i]);
      currentNode.right = rightNode;
      stack.push(rightNode);
    }
  }

  return root;
};
