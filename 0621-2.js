const assert = require("assert");

var leastInterval = function (tasks, n) {
  const taskCounts = new Array(26).fill(0);

  // 統計每個任務的出現次數
  for (let task of tasks) {
    const index = task.charCodeAt(0) - 65;
    taskCounts[index]++;
  }

  // 找出出現次數最多的任務
  const maxCount = Math.max(...taskCounts);

  // 計算至少需要的執行時間
  let minTime = (maxCount - 1) * (n + 1);

  // 考慮其他出現次數等於 maxCount 的任務
  for (let count of taskCounts) {
    if (count === maxCount) {
      minTime++;
    }
  }

  // 返回最小時間
  return Math.max(minTime, tasks.length);
};

assert.equal(leastInterval(["A", "A", "A", "B", "B", "B"], 2), 8);
assert.equal(leastInterval(["A", "A", "A", "B", "B", "B"], 0), 6);
assert.equal(
  leastInterval(
    ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
    2
  ),
  16
);
