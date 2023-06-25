const assert = require("assert");

var canJump = function (nums) {
  const dp = new Array(nums.length).fill(false);
  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    if (dp[i]) {
      for (let j = 1; j <= nums[i] && i + j < nums.length; j++) {
        dp[i + j] = true;
      }
    }
  }

  return dp[nums.length - 1];
};

// 時間複雜度：遍歷一次數組，每次遍歷最多需要跳躍的最大長度，時間複雜度為 O(nk)，其中 n 是數組的長度，k 是數組中的最大元素值。
// 空間複雜度：使用了一個數組 dp，空間複雜度為 O(n)。

assert.equal(canJump([2, 3, 1, 1, 4]), true);
assert.equal(canJump([3, 2, 1, 0, 4]), false);
