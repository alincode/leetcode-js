const assert = require("assert");

var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let currMax = nums[0];
  let currMin = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      // 如果是負數，交換最大和最小的乘積
      [currMax, currMin] = [currMin, currMax];
    }

    currMax = Math.max(nums[i], currMax * nums[i]);
    currMin = Math.min(nums[i], currMin * nums[i]);
    res = Math.max(res, currMax);
  }

  return res;
};

assert.equal(maxProduct([2, 3, -2, 4]), 6);
assert.equal(maxProduct([-2, 0, -1]), 0);
assert.equal(maxProduct([-1, -2, -3]), 6);
