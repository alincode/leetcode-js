const assert = require("assert");

var canJump = function (nums) {
  let maxReach = 0; // 最遠可達的位置

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]); // 更新最遠可達的位置
    if (maxReach >= nums.length - 1) return true;
  }

  return false;
};

// 時間複雜度為 O(n)，其中 n 是數組的長度。
// 空間複雜度為 O(1)

assert.equal(canJump([2, 3, 1, 1, 4]), true);
assert.equal(canJump([3, 2, 1, 0, 4]), false);
