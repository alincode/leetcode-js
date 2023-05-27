const assert = require("assert");

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  if (n < 2) return 0;
  let gains = [];
  for (let i = 1; i < n; ++i) {
    gains[i - 1] = prices[i] - prices[i - 1];
  }
  return Math.max(0, maxSubArray(gains));
};

function maxSubArray(nums) {
  let ans = nums[0]; // -6
  let sum = nums[0]; // -6

  for (let i = 1; i < nums.length; ++i) {
    // sum: max(-6 + 4, 4) = max(2, 4) = 4
    sum = Math.max(sum + nums[i], nums[i]);
    // 4 > -6
    if (sum > ans) ans = sum;
    // ans = 4
  }
  return ans;
}

assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
