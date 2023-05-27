const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const n = nums.length;

  if (n < 3) {
    return result;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    // 如果當前數字已經比 0 大了，那麼它與後面的兩個數的和也必然大於 0
    if (nums[i] > 0) {
      break;
    }
    // 跳過重複的數字
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const map = new Map();
    for (let j = i + 1; j < n; j++) {
      const complement = -nums[i] - nums[j];
      if (map.has(complement)) {
        result.push([nums[i], complement, nums[j]]);
        // 跳過重複的數字
        while (j < n - 1 && nums[j] === nums[j + 1]) {
          j++;
        }
      } else {
        map.set(nums[j], j);
      }
    }
  }

  return result;
};

// Time: O(n^2)
// Space: O(n)

// HashTable
// 此解法的思路與前一個解法類似，只是使用了哈希表來儲存數字，而不是在數組中進行查找。

assert.deepEqual(threeSum([-1, 0, 1, 2, -1, -4]), [
  [-1, -1, 2],
  [-1, 0, 1],
]);

assert.deepEqual(threeSum([0, 1, 1]), []);

assert.deepEqual(threeSum([0, 0, 0]), [[0, 0, 0]]);
