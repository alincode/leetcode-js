const assert = require("assert");

var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  return Math.max(
    helper(nums, 0, nums.length - 2),
    helper(nums, 1, nums.length - 1)
  );
};

function helper(nums, start, end) {
  let prevMax = 0;
  let currMax = 0;

  for (let i = start; i <= end; i++) {
    const temp = currMax;
    currMax = Math.max(currMax, prevMax + nums[i]);
    prevMax = temp;
  }

  return currMax;
}

// 時間複雜度為 O(N)
// 空間複雜度為 O(1)

assert.equal(rob([2, 3, 2]), 3);
assert.equal(rob([1, 2, 3, 1]), 4);
assert.equal(rob([1, 2, 3]), 3);
