const assert = require("assert");

var findMin = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) return nums[i];
  }

  // 如果沒有找到比前一個元素小的元素，則最小值是第一個元素
  return nums[0];
};

// 時間複雜度是 O(N)
// 空間複雜度是 O(1)

assert.equal(findMin([3, 4, 5, 1, 2]), 1);
assert.equal(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
assert.equal(findMin([11, 13, 15, 17]), 11);
