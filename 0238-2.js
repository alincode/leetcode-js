const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = Array.from({ length: nums.length }, () => 1);
  let pre = 1;
  let post = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = pre;
    pre *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= post;
    post *= nums[i];
  }
  return result;
};

// Time: O(n)
// Space: O(1)

assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
assert.deepEqual(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
