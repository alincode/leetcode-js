const assert = require("assert");
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
      }
    }
  }
  return nums;
};

assert.deepEqual(sortColors([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]);
assert.deepEqual(sortColors([2, 0, 1]), [0, 1, 2]);
