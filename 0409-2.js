const assert = require("assert");

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    map.set(c, (map.get(c) || 0) + 1);
  }
  let count = 0;
  for (const val of map.values()) {
    count += Math.floor(val / 2) * 2;
    if (count % 2 === 0 && val % 2 === 1) {
      count++;
    }
  }
  return count;
};

assert.equal(longestPalindrome("abccccdd"), 7);
assert.equal(longestPalindrome("a"), 1);
assert.equal(longestPalindrome("ccc"), 3);
assert.equal(longestPalindrome("bananas"), 5);
