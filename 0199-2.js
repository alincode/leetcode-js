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

  const dfs = (node, depth) => {
    if (!node) return;

    // 將每一層的第一個節點的值加入結果陣列
    if (result.length === depth) result.push(node.val);

    // 先遍歷右子節點，再遍歷左子節點，確保每層只有最右邊的節點被加入結果
    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  };

  dfs(root, 0);
  return result;
};

// 時間複雜度為 O(N)，其中 N 是二叉樹的節點數量。
// 空間複雜度取決於函式的遞歸深度，最壞情況下為 O(N)，其中 N 是二叉樹的高度。
