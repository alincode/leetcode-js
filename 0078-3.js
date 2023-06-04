const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  let subsets = [];

  function dfs(i) {
    if (i >= nums.length) {
      result.push(subsets.slice());
      return;
    }

    // decision to include nums[i]
    subsets.push(nums[i]);
    dfs(i + 1);

    // decision NOT to include nums[i]
    subsets.pop();
    dfs(i + 1);
  }

  dfs(0);
  return result;
};

assert.deepEqual(subsets([1, 2, 3]), [
  [1, 2, 3],
  [1, 2],
  [1, 3],
  [1],
  [2, 3],
  [2],
  [3],
  [],
]);

assert.deepEqual(subsets([0]), [[0], []]);
