const assert = require("assert");

var largestRectangleArea = function (heights) {
  const stack = [];
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    while (
      stack.length > 0 &&
      (i === heights.length || heights[i] < heights[stack[stack.length - 1]])
    ) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }

  return maxArea;
};

assert.equal(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
assert.equal(largestRectangleArea([2, 4]), 4);
