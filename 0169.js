const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let dist = {};
  let candidate = nums[0];
  let maxCount = 0;
  for (let n of nums) {
    if (dist[n]) {
      dist[n]++;
      if (dist[n] > maxCount) {
        candidate = n;
        maxCount = dist[n];
      }
    } else {
      dist[n] = 1;
    }
  }
  return candidate;
};

assert.equal(majorityElement([3, 2, 3]), 3);
assert.equal(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
assert.equal(majorityElement([3, 3, 4]), 3);
assert.equal(majorityElement([1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6, 2, 2]), 1);
