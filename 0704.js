const assert = require("assert");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.round(l + (r - l) / 2);

    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      return m;
    }
  }
  return -1;
};

assert.equal(search([-1, 0, 3, 5, 9, 12], 9), 4);
assert.equal(search([-1, 0, 3, 5, 9, 12], 2), -1);
