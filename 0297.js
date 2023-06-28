var serialize = function (root) {
  let res = [];

  function dfs(node) {
    if (!node) {
      res.push("N");
      return;
    }

    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return res.join(",");
};

var deserialize = function (data) {
  let values = data.split(",");
  let index = 0;

  function dfs() {
    if (values[index] == "N") {
      index++;
      return null;
    }

    let node = new TreeNode(values[index]);
    index++;
    node.left = dfs();
    node.right = dfs();
    return node;
  }

  return dfs();
};
