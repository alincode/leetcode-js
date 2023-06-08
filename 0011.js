const assert = require("assert");

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0; // 左指針
  let right = height.length - 1; // 右指針
  let maxArea = 0; // 最大面積

  while (left < right) {
    // 計算容器的面積
    const area = Math.min(height[left], height[right]) * (right - left);
    // 更新最大面積
    maxArea = Math.max(maxArea, area);

    // 移動較小柱子的指針
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
assert.equal(maxArea([1, 1]), 1);
