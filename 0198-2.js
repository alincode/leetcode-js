const assert = require("assert");

var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let prev1 = nums[0];
  let prev2 = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    const temp = prev1;
    prev1 = prev2;
    prev2 = Math.max(prev2, temp + nums[i]);
  }

  return prev2;
};

assert.equal(rob([1, 2, 3, 1]), 4);
assert.equal(rob([2, 7, 9, 3, 1]), 12);
