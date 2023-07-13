const assert = require("assert");

var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[0] - b[0]); // 按照開始時間升序排序
  const n = intervals.length;
  const dp = new Array(n).fill(1); // dp[i] 表示以區間 i 結尾的最長非重疊區間數量

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (intervals[i][0] >= intervals[j][1]) {
        // 區間 i 與區間 j 非重疊，更新 dp[i]
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  const maxLen = Math.max(...dp); // 最長非重疊區間數量
  return n - maxLen; // 移除的區間數量為總區間數減去最長非重疊區間數量
};

// 時間複雜度為 O(n^2)
// 空間複雜度為 O(n)

assert.equal(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
  1
);

assert.equal(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ]),
  2
);

assert.equal(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ]),
  0
);
