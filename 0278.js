const assert = require("assert");

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let m = left + Math.floor((right - left) / 2);
      if (isBadVersion(m)) {
        right = m;
      } else {
        left = m + 1;
      }
    }
    return right;
  };
};

const isBadVersion = function (version) {
  const result = version >= 4;
  return result;
};

const s = solution(isBadVersion);
assert.equal(s(5), 4);
