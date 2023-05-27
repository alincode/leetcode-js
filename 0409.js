const assert = require("assert");

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let count = {};
  for (let c of s) {
    count[c] = count[c] ? ++count[c] : 1;
  }

  let odd = 0;
  let ans = 0;
  for (let value of Object.values(count)) {
    if (value % 2 === 0) {
      ans += value;
    } else {
      odd = 1;
      ans += value - 1;
    }
  }

  return (ans += odd);
};

assert.equal(longestPalindrome("abccccdd"), 7);
assert.equal(longestPalindrome("a"), 1);
assert.equal(longestPalindrome("ccc"), 3);
assert.equal(longestPalindrome("bananas"), 5);
