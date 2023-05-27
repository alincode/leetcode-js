const assert = require("assert");
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set();
  for (let n of nums) {
    if (set.has(n)) return true;
    set.add(n);
  }
  return false;
};

assert.equal(containsDuplicate([1, 2, 3, 1]), true);
assert.equal(containsDuplicate([1, 2, 3, 4]), false);
assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

// Time: 1. Best : O(1) 2. Worst: O(n)
// Space: O(n)
