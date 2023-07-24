const assert = require("assert");

var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let prev1 = 0;
  let prev2 = 0;

  for (let num of nums) {
    let temp = Math.max(num + prev1, prev2);
    prev1 = prev2;
    prev2 = temp;
  }

  return prev2;
};

assert.equal(rob([1, 2, 3, 1]), 4);
assert.equal(rob([2, 7, 9, 3, 1]), 12);
