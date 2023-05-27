const assert = require("assert");

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
    for (let i = coins[coinIndex]; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coins[coinIndex]] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// better

assert.equal(coinChange([1, 3, 4, 5], 7), 2);
assert.equal(coinChange([1, 2, 5], 11), 3);
assert.equal(coinChange([2], 3), -1);
assert.equal(coinChange([1], 0), 0);
