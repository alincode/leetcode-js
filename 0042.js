const assert = require("assert");

// DP
var trap = function (height) {
  if (height.length === 0) return 0;

  const n = height.length;
  const leftMax = new Array(n); // 存儲每個位置左邊的最大高度
  const rightMax = new Array(n); // 存儲每個位置右邊的最大高度

  // 計算左邊的最大高度
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // 計算右邊的最大高度
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let water = 0; // 雨水量

  // 遍歷每個位置，計算該位置能夠接住的雨水量
  for (let i = 0; i < n; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return water;
};

// 時間複雜度為 O(N)，其中 N 是柱子的數量。
// 空間複雜度為 O(N)，用於存儲左邊最大高度和右邊最大高度的陣列。

assert.equal(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
assert.equal(trap([4, 2, 0, 3, 2, 5]), 9);
