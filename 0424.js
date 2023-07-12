const assert = require("assert");

var characterReplacement = function (s, k) {
  const count = Array(26).fill(0); // 建立長度為 26 的數組，用於記錄每個字母出現的次數
  let maxLen = 0; // 最長連續子串的長度
  let maxF = 0; // 窗口內出現最多次的字母的次數
  let left = 0; // 窗口的左邊界

  for (let right = 0; right < s.length; right++) {
    count[s.charCodeAt(right) - 65]++; // 更新字母出現次數
    maxF = Math.max(maxF, count[s.charCodeAt(right) - 65]); // 更新最多次數

    // 如果窗口內需要替換的字母數量超過了 k，需要收縮窗口
    while (right - left + 1 - maxF > k) {
      count[s.charCodeAt(left) - 65]--; // 收縮窗口，更新字母出現次數
      left++; // 左邊界右移
    }

    maxLen = Math.max(maxLen, right - left + 1); // 更新最長連續子串的長度
  }

  return maxLen;
};

assert.equal(characterReplacement("ABAB", 2), 4);
assert.equal(characterReplacement("AABABBA", 1), 4);
