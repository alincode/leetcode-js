const assert = require("assert");

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};

assert.equal(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
assert.equal(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
