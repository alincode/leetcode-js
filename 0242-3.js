const assert = require("assert");

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let count = {};

  for (let i = 0; i < s.length; i++) {
    if (!count[s[i]]) count[s[i]] = 0;
    count[s[i]]++;
  }

  for (let i = 0; i < t.length; i++) {
    if (!count[t[i]] || t[i] == 0) return false;
    count[t[i]] = count[t[i]] - 1;
  }
  return true;
};

assert.equal(isAnagram("anagram", "nagaram"), true);
assert.equal(isAnagram("rat", "car"), false);
