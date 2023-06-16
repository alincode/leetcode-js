var kthSmallest = function (root, k) {
  const minHeap = [];

  const traverseTree = function (node) {
    if (!node) return;

    // 將節點推入最小堆
    minHeap.push(node.val);

    // 遞歸處理左右子樹
    traverseTree(node.left);
    traverseTree(node.right);
  };

  traverseTree(root);

  // 對最小堆進行排序，以便取出第 k 小的元素
  minHeap.sort((a, b) => a - b);

  // 返回第 k 小的元素
  return minHeap[k - 1];
};
