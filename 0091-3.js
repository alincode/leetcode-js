const assert = require("assert");

var numDecodings = function (s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(-1);

  function dfs(index) {
    if (index === n) return 1;
    if (dp[index] !== -1) return dp[index];
    if (s[index] === "0") return 0;

    // Case 1: Decode current digit
    let count = 0;
    count += dfs(index + 1);

    // Case 2: Decode current and next digit
    if (
      index + 1 < n &&
      (s[index] === "1" || (s[index] === "2" && Number(s[index + 1]) <= 6))
    ) {
      count += dfs(index + 2);
    }

    dp[index] = count;
    return count;
  }

  return dfs(0);
};

assert.equal(numDecodings("12"), 2);
assert.equal(numDecodings("226"), 3);
assert.equal(numDecodings("06"), 0);
