const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};

assert.equal(majorityElement([3, 2, 3]), 3);
assert.equal(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
assert.equal(majorityElement([3, 3, 4]), 3);
assert.equal(majorityElement([1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6, 2, 2]), 1);
