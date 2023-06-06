const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  function backtrack(currSubset, start) {
    console.count("===");
    console.log(`backtrack([${currSubset}], ${start})`);
    result.push(currSubset.slice()); // 將當前子集加入結果列表

    for (let i = start; i < nums.length; i++) {
      currSubset.push(nums[i]); // 將當前數字加入子集
      backtrack(currSubset, i + 1); // 遞歸生成下一個數字的子集
      currSubset.pop(); // 回溯，刪除最後一個數字
    }
  }

  backtrack([], 0);
  return result;
};

// 8 times
assert.deepEqual(subsets([1, 2, 3]), [
  [],
  [1],
  [1, 2],
  [1, 2, 3],
  [1, 3],
  [2],
  [2, 3],
  [3],
]);

// assert.deepEqual(subsets([0]), [[], [0]]);
