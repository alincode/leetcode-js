const assert = require("assert");

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  if (n < 1) return 0;
  let buyingPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < n; ++i) {
    buyingPrice = Math.min(buyingPrice, prices[i]);
    profit = Math.max(profit, prices[i] - buyingPrice);
  }
  return profit;
};

assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
