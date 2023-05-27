const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) nums[i] += nums[i - 1];
    maxSum = Math.max(maxSum, nums[i]);
  }
  return maxSum;
};

// DP
assert.equal(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
assert.equal(maxSubArray([1]), 1);
assert.equal(maxSubArray([5, 4, -1, 7, 8]), 23);
