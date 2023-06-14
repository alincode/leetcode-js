const assert = require("assert");

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pSorted = p.split("").sort().join(""); // 將p字串排序
  const result = [];

  for (let i = 0; i <= s.length - p.length; i++) {
    const subStringSorted = s
      .slice(i, i + p.length)
      .split("")
      .sort()
      .join(""); // 將s中的子字串排序

    if (subStringSorted === pSorted) result.push(i);
  }

  return result;
};

// Time Limit Exceeded

assert.deepEqual(findAnagrams("cbaebabacd", "abc"), [0, 6]);
assert.deepEqual(findAnagrams("abab", "ab"), [0, 1, 2]);
