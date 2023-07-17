const assert = require("assert");

var numDecodings = function (s) {
  if (s[0] === "0") return 0;

  const n = s.length;
  const memo = {};

  function dfs(index) {
    if (index === n) return 1;
    if (s[index] === "0") return 0;
    if (index in memo) return memo[index];

    let count = dfs(index + 1);
    if (index < n - 1 && Number(s.slice(index, index + 2)) <= 26) {
      count += dfs(index + 2);
    }

    memo[index] = count;
    return count;
  }

  return dfs(0);
};

assert.equal(numDecodings("12"), 2);
assert.equal(numDecodings("226"), 3);
assert.equal(numDecodings("06"), 0);
