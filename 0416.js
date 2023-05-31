const assert = require("assert");
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((acc, value) => acc + value);
  if (sum % 2 !== 0) return false;

  const target = sum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let j = target; j >= num; j--) {
      if (dp[j - num]) {
        dp[j] = true;
      }
      if (dp[target]) return true;
    }
  }
  return dp[target];
};

assert.equal(canPartition([1, 5, 11, 5]), true);
assert.equal(canPartition([1, 2, 3, 5]), false);

// 時間複雜度為 O(n * sum)
// 空間複雜度為 O(target)
