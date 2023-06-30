const assert = require("assert");

// Monotonic Stack
var trap = function (height) {
  let water = 0; // 雨水量
  let stack = []; // 單調遞減棧，存儲柱子的索引

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      let top = stack.pop(); // 棧頂元素索引
      if (!stack.length) break; // 棧中沒有左邊界，退出循環
      let left = stack[stack.length - 1]; // 左邊界柱子的索引
      let distance = i - left - 1; // 距離 = 當前柱子索引 - 左邊界柱子索引 - 1
      let boundedHeight = Math.min(height[i], height[left]) - height[top]; // 雨水高度 = 左邊界柱子高度和當前柱子高度的最小值 - 棧頂柱子高度
      water += distance * boundedHeight; // 雨水量 = 距離 * 雨水高度
    }
    stack.push(i); // 將當前柱子的索引壓入棧中
  }

  return water;
};

// 時間複雜度為 O(N)，其中 N 是柱子的數量。
// 空間複雜度為 O(N)，用於存儲棧的元素。

assert.equal(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
assert.equal(trap([4, 2, 0, 3, 2, 5]), 9);
