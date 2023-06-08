const assert = require("assert");

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const n = height.length;
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const h = Math.min(height[i], height[j]);
      const w = j - i;
      const area = h * w;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
assert.equal(maxArea([1, 1]), 1);
