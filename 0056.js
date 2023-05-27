const assert = require("assert");
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 將區間按照起始位置進行排序
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let lastMerged = result[result.length - 1];

    // 如果當前區間的起始位置小於等於上一個合併區間的結束位置，則存在重疊，需要合併
    if (current[0] <= lastMerged[1]) {
      // 更新合併區間的結束位置
      result[result.length - 1][1] = Math.max(current[1], lastMerged[1]);
    } else {
      // 當前區間與上一個合併區間無重疊，將當前區間添加到合併結果中
      result.push(current);
    }
  }
  return result;
};

assert.deepEqual(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
  [
    [1, 6],
    [8, 10],
    [15, 18],
  ]
);

assert.deepEqual(
  merge([
    [1, 4],
    [4, 5],
  ]),
  [[1, 5]]
);
