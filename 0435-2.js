const assert = require("assert");

var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]); // 按照結束時間升序排序

  let count = 0; // 移除的區間數量
  let end = intervals[0][1]; // 初始結束時間

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) {
      // 出現重疊，移除結束時間較晚的區間
      count++;
    } else {
      // 更新結束時間
      end = intervals[i][1];
    }
  }

  return count;
};

// 時間複雜度為 O(nlogn)
// 空間複雜度為 O(1)

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
