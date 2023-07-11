const assert = require("assert");

var lengthOfLIS = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let maxLength = 0;
  for (let length of dp) {
    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
};

assert.equal(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
assert.equal(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4);
assert.equal(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]), 1);
