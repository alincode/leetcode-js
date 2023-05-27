const assert = require("assert");

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  coins.sort((a, b) => b - a);
  const queue = [amount];
  let level = 0;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      for (const coin of coins) {
        const newNode = node - coin;
        if (newNode === 0) {
          return level + 1;
        }
        if (newNode > 0) {
          queue.push(newNode);
        }
      }
    }
    level++;
  }
  return -1;
};
// BFS (bad)

assert.equal(coinChange([1, 2, 5], 11), 3);
assert.equal(coinChange([2], 3), -1);
assert.equal(coinChange([1], 0), 0);
