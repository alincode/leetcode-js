const assert = require("assert");

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let res = [];
  let i = 0;
  // Step1: 沒有重疊
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  // Step2: 有重疊
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  res.push(newInterval);

  // Step3: 剩餘的組數
  while (i < intervals.length && newInterval[1] < intervals[i][0]) {
    res.push(intervals[i]);
    i++;
  }
  return res;
};

assert.deepStrictEqual(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  ),
  [
    [1, 5],
    [6, 9],
  ]
);

assert.deepStrictEqual(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  ),
  [
    [1, 2],
    [3, 10],
    [12, 16],
  ]
);
