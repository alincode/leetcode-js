const assert = require("assert");

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < nums[right]) {
      // 最小值在 mid 的左側
      right = mid;
    } else {
      // 最小值在 mid 的右側
      left = mid + 1;
    }
  }

  // 當 left 和 right 指針指向同一個位置時，找到了最小值
  return nums[left];
};

// 時間複雜度是 O(log N)
// 空間複雜度是 O(1)

assert.equal(findMin([3, 4, 5, 1, 2]), 1);
assert.equal(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
assert.equal(findMin([11, 13, 15, 17]), 11);
