const assert = require("assert");

var lengthOfLIS = function (nums) {
  const n = nums.length;
  const tails = [];
  let len = 0;

  for (let num of nums) {
    let left = 0;
    let right = len;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left === len) {
      tails.push(num);
      len++;
    } else {
      tails[left] = num;
    }
  }

  return len;
};

assert.equal(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
assert.equal(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4);
assert.equal(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]), 1);
