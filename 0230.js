var kthSmallest = function (root, k) {
  let count = 0;
  let result = null;

  const inorderTraversal = function (node) {
    if (!node) return;

    inorderTraversal(node.left);

    count++;
    if (count === k) {
      result = node.val;
      return;
    }

    inorderTraversal(node.right);
  };

  inorderTraversal(root);

  return result;
};
