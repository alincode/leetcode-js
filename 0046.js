const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  function backtrack(combination, visited) {
    if (combination.length === nums.length) {
      result.push([...combination]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      combination.push(nums[i]);
      visited[i] = true;
      backtrack(combination, visited);
      combination.pop();
      visited[i] = false;
    }
  }

  backtrack([], new Array(nums.length).fill(false));
  return result;
};

assert.deepEqual(permute([1, 2, 3]), [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
]);

assert.deepEqual(permute([0, 1]), [
  [0, 1],
  [1, 0],
]);

assert.deepEqual(permute([1]), [[1]]);
