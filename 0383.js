const assert = require("assert");
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let dist = {};
  for (let s of magazine) {
    dist[s] = dist[s] ? ++dist[s] : 1;
  }

  for (let s of ransomNote) {
    if (!dist[s]) return false;
    dist[s]--;
    if (dist[s] < 0) return false;
  }
  return true;
};

assert.equal(canConstruct("a", "b"), false);
assert.equal(canConstruct("aa", "ab"), false);
assert.equal(canConstruct("aa", "aab"), true);
