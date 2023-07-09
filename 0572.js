var isSubtree = function (root, subRoot) {
  // 定義遞歸函數，判斷兩棵樹是否相同
  const isSameTree = function (p, q) {
    // 如果兩個節點都為空，則視為相同
    if (!p && !q) return true;
    // 如果其中一個節點為空，則視為不相同
    if (!p || !q) return false;
    // 如果節點的值不相同，則視為不相同
    if (p.val !== q.val) return false;
    // 遞歸檢查左右子樹是否相同
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };

  // 遞歸檢查是否存在以 root 為根節點的子樹與 subRoot 相同
  const checkSubtree = function (root, subRoot) {
    // 如果根節點為空，則子樹也應該為空，視為相同
    if (!root) return !subRoot;
    // 如果根節點與子樹相同，返回 true
    if (isSameTree(root, subRoot)) return true;
    // 遞歸檢查左右子樹是否存在相同的子樹
    return (
      checkSubtree(root.left, subRoot) || checkSubtree(root.right, subRoot)
    );
  };

  return checkSubtree(root, subRoot);
};

// 時間複雜度是 `O(m * n)`，其中 m 是 `root` 樹的節點數，n 是 `subRoot` 樹的節點數。
// 空間複雜度是 O(max(m, n))，遞歸過程中使用的遞歸棧的深度最大為 `max(m, n)`。
