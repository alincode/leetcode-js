const assert = require("assert");
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let start = 0;
  let maxLength = 1;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currLength = right - left + 1;
      if (currLength > maxLength) {
        maxLength = currLength;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // 奇數長度回文串
    expandAroundCenter(i, i + 1); // 偶數長度回文串
  }

  return s.slice(start, start + maxLength);
};

assert.equal(longestPalindrome("babad"), "bab");
assert.equal(longestPalindrome("cbbd"), "bb");
