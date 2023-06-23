const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (i !== nums[i]) return i;
  }
  return -1; // 如果缺失的數字超出了範圍，返回 -1 或其他適當的值
};

assert.equal(missingNumber([3, 0, 1]), 2);
assert.equal(missingNumber([0, 1]), 2);
assert.equal(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);

// 時間複雜度是 O(nlogn)
// 空間複雜度是 O(n)
