const assert = require("assert");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      // 左半部分是有序的
      if (nums[left] <= target && target < nums[mid]) {
        // 目標值在左半部分
        right = mid - 1;
      } else {
        // 目標值在右半部分
        left = mid + 1;
      }
    } else {
      // 右半部分是有序的
      if (nums[mid] < target && target <= nums[right]) {
        // 目標值在右半部分
        left = mid + 1;
      } else {
        // 目標值在左半部分
        right = mid - 1;
      }
    }
  }

  return -1;
};

assert.equal(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
assert.equal(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
assert.equal(search([1], 0), -1);
assert.equal(search([1], 1), 0);
