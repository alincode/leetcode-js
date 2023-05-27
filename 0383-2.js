const assert = require("assert");
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {};

assert.equal(canConstruct("a", "b"), false);
assert.equal(canConstruct("aa", "ab"), false);
assert.equal(canConstruct("aa", "aab"), true);
