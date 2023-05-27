const assert = require("assert");

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins.sort((a, b) => b - a);
  let queue = [amount];
  let level = 0;
  let visited = new Set();
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (curr === 0) return level;
      if (curr < 0) continue;
      for (let coin of coins) {
        let next = curr - coin;
        if (next >= 0 && !visited.has(next)) {
          queue.push(next);
          visited.add(next);
        }
      }
    }
    level++;
  }
  return -1;
};

// Greedy + BFS

// 時間複雜度是O(Sn)，其中S是金銀數，n是硬幣面值。

assert.equal(coinChange([1, 2, 5], 11), 3);
assert.equal(coinChange([2], 3), -1);
assert.equal(coinChange([1], 0), 0);
assert.equal(coinChange([1, 2, 3], 6), 2);
assert.equal(coinChange([1, 3, 4, 5], 7), 2);
