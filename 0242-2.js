const assert = require("assert");

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let sCount = {};
  let tCount = {};

  for (let i = 0; i < s.length; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 0;
    if (!tCount[t[i]]) tCount[t[i]] = 0;
    sCount[s[i]]++;
    tCount[t[i]]++;
  }

  for (let key in sCount) {
    if (sCount[key] != tCount[key]) return false;
  }
  return true;
};

assert.equal(isAnagram("anagram", "nagaram"), true);
assert.equal(isAnagram("rat", "car"), false);
