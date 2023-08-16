const assert = require("assert");

var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let maxEndingHere = nums[0];
  let minEndingHere = nums[0];
  let maxSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      // 如果是負數，交換最大和最小的乘積
      [maxEndingHere, minEndingHere] = [minEndingHere, maxEndingHere];
    }

    maxEndingHere = Math.max(nums[i], maxEndingHere * nums[i]);
    minEndingHere = Math.min(nums[i], minEndingHere * nums[i]);

    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
};

assert.equal(maxProduct([2, 3, -2, 4]), 6);
assert.equal(maxProduct([-2, 0, -1]), 0);
