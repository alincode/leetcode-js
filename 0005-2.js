const assert = require("assert");
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  let maxLength = 1;
  let start = 0;

  // 建立一個二維的動態規劃表
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  // 單個字符都是回文
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // 檢查長度為 2 的子串是否是回文
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      maxLength = 2;
      start = i;
    }
  }

  // 檢查長度大於 2 的子串是否是回文
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        if (len > maxLength) {
          maxLength = len;
          start = i;
        }
      }
    }
  }

  return s.slice(start, start + maxLength);
};

assert.equal(longestPalindrome("babad"), "bab");
assert.equal(longestPalindrome("cbbd"), "bb");
