var isSubtree = function (root, subRoot) {
  // 將樹轉換為字串表示形式
  const serializeTree = function (node) {
    if (!node) return "null";
    return (
      "#" +
      node.val +
      " " +
      serializeTree(node.left) +
      " " +
      serializeTree(node.right)
    );
  };

  const serializedRoot = serializeTree(root);
  const serializedSubRoot = serializeTree(subRoot);

  // 判斷 serializedSubRoot 是否是 serializedRoot 的子字串
  return serializedRoot.indexOf(serializedSubRoot) !== -1;
};
