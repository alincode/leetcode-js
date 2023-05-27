const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let n = nums.length;
  let res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;
    if (nums[i] === nums[i - 1]) continue;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

// Time: O(n^2)
// Space: O(n)

// two point

assert.deepEqual(threeSum([-1, 0, 1, 2, -1, -4]), [
  [-1, -1, 2],
  [-1, 0, 1],
]);

assert.deepEqual(threeSum([0, 1, 1]), []);

assert.deepEqual(threeSum([0, 0, 0]), [[0, 0, 0]]);
