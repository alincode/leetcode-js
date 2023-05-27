const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const prefix = new Array(n).fill(1);
  const postfix = new Array(n).fill(1);

  // 計算前綴乘積
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  // 計算後綴乘積
  for (let i = n - 2; i >= 0; i--) {
    postfix[i] = postfix[i + 1] * nums[i + 1];
  }

  // 通過前綴乘積和後綴乘積計算結果
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * postfix[i];
  }

  return result;
};

// Time: O(n)
// Space: O(n)

assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
// assert.deepEqual(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
