const assert = require("assert");
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0; // 指向已經排好的 0 的右邊界
  let right = nums.length - 1; // 指向已經排好的 2 的左邊界
  let current = 0; // 當前指針

  while (current <= right) {
    if (nums[current] === 0) {
      swap(nums, current, left);
      left++;
      current++;
    } else if (nums[current] === 2) {
      swap(nums, current, right);
      right--;
    } else {
      current++;
    }
  }
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

assert.deepEqual(sortColors([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]);
assert.deepEqual(sortColors([2, 0, 1]), [0, 1, 2]);
