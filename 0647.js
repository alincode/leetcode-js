const assert = require("assert");

var countSubstrings = function (s) {
  let count = 0;

  // 擴展中心法
  const expandAroundCenter = function (left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  };

  // 遍歷每個字符，作為回文串的中心或中心的左側
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // 單個字符作為中心
    expandAroundCenter(i, i + 1); // 兩個相同字符作為中心
  }

  return count;
};

// 時間複雜度是 O(n^2)，其中 n 是字符串的長度。
// 空間複雜度是 O(1)

assert.equal(countSubstrings("abc"), 3);
assert.equal(countSubstrings("aaa"), 6);
