const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const n = nums.length;
  const subsetCount = Math.pow(2, n);

  for (let i = 0; i < subsetCount; i++) {
    const subset = [];
    for (let j = 0; j < n; j++) {
      if ((i >> j) & 1) subset.push(nums[j]);
    }
    result.push(subset);
  }

  return result;
};

// Bit Manipulation

// 24 times
assert.deepEqual(subsets([1, 2, 3]), [
  [],
  [1],
  [2],
  [1, 2],
  [3],
  [1, 3],
  [2, 3],
  [1, 2, 3],
]);

// assert.deepEqual(subsets([0]), [[], [0]]);
