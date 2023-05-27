const assert = require("assert");

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(combination, remaining, start) {
    if (remaining === 0) {
      result.push([...combination]);
      return;
    }

    if (remaining < 0) return;
    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(combination, remaining - candidates[i], i);
      combination.pop();
    }
  }

  backtrack([], target, 0);
  return result;
};

assert.deepEqual(combinationSum([2, 3, 6, 7], 7), [[2, 2, 3], [7]]);
