const assert = require("assert");
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = (nums) => {
  const sum = nums.reduce((ac, v) => ac + v, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = Array(nums.length + 1)
    .fill()
    .map((i) => Array(target + 1).fill(null));

  function dfs(i, t) {
    if (t === 0) return true;
    if (i === 0 || t < 0) return false;
    if (dp[i][t] !== null) return dp[i][t];
    dp[i][t] = dfs(i - 1, t - nums[i - 1]) || dfs(i - 1, t);
    return dp[i][t];
  }
  return dfs(nums.length - 1, target);
};

assert.equal(canPartition([1, 5, 11, 5]), true);
assert.equal(canPartition([1, 2, 3, 5]), false);
