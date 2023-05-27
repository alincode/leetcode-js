const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = new Array(n);
  result[0] = 1;

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  return result;
};

// Time: O(n)
// Space: O(n)

assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
assert.deepEqual(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
