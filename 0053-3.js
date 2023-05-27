const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = -Infinity;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};

// 暴力解

assert.equal(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
assert.equal(maxSubArray([1]), 1);
// assert.equal(maxSubArray([5, 4, -1, 7, 8]), 23);
