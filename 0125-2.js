const assert = require("assert");

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
};

assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.equal(isPalindrome("race a car"), false);
assert.equal(isPalindrome(" "), true);
