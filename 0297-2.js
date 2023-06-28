var serialize = function (root) {
  if (!root) return "";
  const res = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node) {
      res.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    } else {
      res.push("N");
    }
  }
  return res.join(",");
};

var deserialize = function (data) {
  if (data === "") return null;
  const items = data.split(",");
  const stack = [];
  while (items.length) {
    const val = items.pop();
    if (val !== "N") {
      const node = new TreeNode(val);
      node.left = stack.pop();
      node.right = stack.pop();
      stack.push(node);
    } else {
      stack.push(null);
    }
  }
  return stack[0];
};
