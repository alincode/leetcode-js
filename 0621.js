const assert = require("assert");

const leastInterval = function (tasks, n) {
  // 使用哈希表 hash 紀錄每個任務的出現次數
  const hash = {};
  for (let task of tasks) {
    hash[task] = hash[task] + 1 || 1;
  }

  let maxVal = 0;
  let maxCount = 0;

  // 找出出現次數最大的任務和相同最大次數的任務數量
  for (let key in hash) {
    if (hash[key] > maxVal) {
      maxVal = hash[key];
      maxCount = 1;
    } else if (hash[key] === maxVal) {
      maxCount++;
    }
  }

  // 計算至少需要的冷卻時間
  const cooldownTime = (maxVal - 1) * (n + 1);

  // 最終結果是冷卻時間加上剩餘的任務數量，可能超過 tasks 的長度
  return Math.max(cooldownTime + maxCount, tasks.length);
};

// 時間複雜度為 O(N)，其中 N 是 `tasks` 陣列的長度，因為需要遍歷 `tasks` 陣列和哈希表。
// 空間複雜度為 O(M)，其中 M 是 `tasks` 陣列中不同任務的數量

assert.equal(leastInterval(["A", "A", "A", "B", "B", "B"], 2), 8);
assert.equal(leastInterval(["A", "A", "A", "B", "B", "B"], 0), 6);
assert.equal(
  leastInterval(
    ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
    2
  ),
  16
);
