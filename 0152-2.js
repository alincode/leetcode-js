const assert = require("assert");

var maxProduct = function (nums) {
  let currMax = nums[0];
  let currMin = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tempMax = currMax;
    currMax = Math.max(nums[i], nums[i] * currMax, nums[i] * currMin);
    currMin = Math.min(nums[i], nums[i] * currMin, nums[i] * tempMax);
    result = Math.max(result, currMax);
  }
  return result;
};

assert.equal(maxProduct([2, 3, -2, 4]), 6);
assert.equal(maxProduct([-2, 0, -1]), 0);
assert.equal(maxProduct([-1, -2, -3]), 6);
