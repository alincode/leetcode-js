const assert = require("assert");

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const n = coins.length;
  let res = Number.MAX_VALUE;

  const dfs = (index, count, amount) => {
    if (amount === 0) {
      res = Math.min(res, count);
      return;
    }
    if (index === n) {
      return;
    }
    for (
      let i = Math.floor(amount / coins[index]);
      i >= 0 && i + count < res;
      i--
    ) {
      dfs(index + 1, count + i, amount - i * coins[index]);
    }
  };

  coins.sort((a, b) => b - a);
  dfs(0, 0, amount);
  return res === Number.MAX_VALUE ? -1 : res;
};
// DFS (bad)

assert.equal(coinChange([1, 2, 5], 11), 3);
assert.equal(coinChange([2], 3), -1);
assert.equal(coinChange([1], 0), 0);
