const assert = require("assert");

var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) goal = i;
  }

  return goal === 0;
};

// 時間複雜度為 O(n)，其中 n 是數組的長度。
// 空間複雜度為 O(1)

assert.equal(canJump([2, 3, 1, 1, 4]), true);
assert.equal(canJump([3, 2, 1, 0, 4]), false);
