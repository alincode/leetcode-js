// 核心想法為，最長路徑有沒有通過 root？
// 若有：最長路徑為 左邊 node 的最深深度 加上 右邊 node 的最深深度。
// 若沒有：最長路徑為 左邊 node 的最長路徑 或是 右邊 node 的最長路徑。
// https://ithelp.ithome.com.tw/articles/10227129

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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 0;

  const depth = (node) => {
    if (!node) return 0;
    let leftDepth = depth(node.left);
    let rightDepth = depth(node.right);
    ans = Math.max(ans, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  };

  depth(root);

  return ans;
};
