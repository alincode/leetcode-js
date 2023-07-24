const assert = require("assert");

var rob = function (nums) {
  const n = nums.length;
  return robHelper(nums, n - 1);
};

function robHelper(nums, i) {
  if (i < 0) return 0;
  return Math.max(robHelper(nums, i - 1), robHelper(nums, i - 2) + nums[i]);
}

assert.equal(rob([1, 2, 3, 1]), 4);
assert.equal(rob([2, 7, 9, 3, 1]), 12);
