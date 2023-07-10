const assert = require("assert");

var countSubstrings = function (s) {
  const n = s.length;
  let count = 0;
  const dp = Array.from({ length: n }, () => new Array(n).fill(false));

  // 初始化單個字符為回文串
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    count++;
  }

  // 遍歷所有長度大於1的子串，計算是否為回文串
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      if (s[i] === s[j]) {
        // 如果兩個邊界字符相同，且內部子串為回文串，則整個子串也為回文串
        if (len === 2 || dp[i + 1][j - 1]) {
          dp[i][j] = true;
          count++;
        }
      }
    }
  }

  return count;
};

// 時間複雜度為 O(n^2)
// 空間複雜度也是 O(n^2)

assert.equal(countSubstrings("abc"), 3);
assert.equal(countSubstrings("aaa"), 6);
