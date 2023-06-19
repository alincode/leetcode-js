const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
};

assert.equal(missingNumber([3, 0, 1]), 2);
assert.equal(missingNumber([0, 1]), 2);
assert.equal(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);

// 時間複雜度是 O(n)
// 空間複雜度是 O(1)
