const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, currentValue) => acc + currentValue);
  return expectedSum - actualSum;
};

assert.equal(missingNumber([3, 0, 1]), 2);
assert.equal(missingNumber([0, 1]), 2);
assert.equal(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);

// 時間複雜度是 O(n)
// 空間複雜度是 O(1)
