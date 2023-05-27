const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currSum = -Infinity;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

// Greedy

assert.equal(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
assert.equal(maxSubArray([1]), 1);
assert.equal(maxSubArray([5, 4, -1, 7, 8]), 23);
